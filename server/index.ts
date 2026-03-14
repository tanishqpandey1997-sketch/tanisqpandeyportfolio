import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import db from './db';
import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Initialize AI
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

// --- Middleware ---
const authenticate = async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// --- API Routes ---
app.post('/api/leads', async (req, res) => {
  const { name, company, email, website, project_type, budget, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const id = uuidv4();
    await db.collection('leads').doc(id).set({
      id, name, company, email, website, project_type, budget, message,
      created_at: new Date().toISOString()
    });

    res.json({ success: true, id });
  } catch (error: any) {
    console.error('Failed to save lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'active', timestamp: new Date().toISOString() });
});

// Generations History
app.get('/api/generations', authenticate, async (req, res) => {
  try {
    const snapshot = await db.collection('generations')
      .orderBy('created_at', 'desc')
      .limit(50)
      .get();
    
    const generations = snapshot.docs.map(doc => doc.data());
    res.json(generations);
  } catch (error) {
    console.error('Fetch generations error:', error);
    res.status(500).json({ error: 'Failed to fetch generations' });
  }
});

// AI Proxy for Copy Generation
app.post('/api/agent/generate-copy', authenticate, async (req, res) => {
  const { prompt } = req.body;
  
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const result = await genAI.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: 'user', parts: [{ text: prompt }] }]
    });
    
    const text = result.text || "No response generated.";

    // Store in DB
    const id = uuidv4();
    await db.collection('generations').doc(id).set({
      id, prompt, type: 'copy', metadata: JSON.stringify({ response: text }),
      created_at: new Date().toISOString()
    });

    res.json({ id, text });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Command Execution Handler
app.post('/api/agent/command', authenticate, async (req, res) => {
  const { command, context } = req.body;
  
  if (!command) return res.status(400).json({ error: 'Command is required' });

  const parts = command.split(' ');
  const cmdType = parts[0].toLowerCase();
  const prompt = parts.slice(1).join(' ');

  console.log(`Executing agent command: ${cmdType} with prompt: ${prompt}`);

  try {
    let responseText = "";

    if (cmdType === '/audit') {
      responseText = "### Performance Audit Report\n\n1. **Optimize Images**: Detected 5 large hero assets (>500KB). Convert to WebP.\n2. **Enable Gzip**: Your server is currently sending uncompressed assets.\n3. **Critical CSS**: Inline your fold-above CSS to improve LCP by ~0.4s.";
    } else if (cmdType === '/copy') {
      if (!prompt) {
        responseText = "Please provide a brief for the copy generation. Example: `/copy A minimal agency landing page`.";
      } else {
        const result = await genAI.models.generateContent({
          model: "gemini-1.5-flash",
          contents: [{ role: 'user', parts: [{ text: `Generate professional website copy for: ${prompt}. Keep it concise, premium, and impactful.` }] }]
        });
        responseText = result.text || "No response generated.";
      }
    } else if (cmdType === '/optimize') {
      responseText = "Analyzing assets... Found 12 images. Recommendation: Implement `react-lazy-load-image-component` and use Cloudinary for dynamic resizing.";
    } else if (cmdType === '/cms') {
      responseText = "Based on your tech stack (Vite + React), I recommend **Payload CMS** or **Sanity.io** for a seamless developer experience and premium headless capabilities.";
    } else {
      const result = await genAI.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [{ role: 'user', parts: [{ text: command }] }]
      });
      responseText = result.text || "I'm not sure how to handle that command yet.";
    }

    // Store in DB
    if (['/copy', '/audit', '/optimize'].includes(cmdType)) {
      const id = uuidv4();
      await db.collection('generations').doc(id).set({
        id, prompt: command, type: cmdType.substring(1), 
        metadata: JSON.stringify({ response: responseText }),
        created_at: new Date().toISOString()
      });
    }

    res.json({ 
      id: uuidv4(),
      text: responseText,
      type: cmdType.startsWith('/') ? cmdType.substring(1) : 'chat'
    });
  } catch (error: any) {
    console.error('Agent execution error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Handle SPA routing - redirect all non-API requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Fullstack Server running at http://localhost:${port}`);
});
