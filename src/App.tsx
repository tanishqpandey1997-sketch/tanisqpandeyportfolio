import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import ProcessPage from './pages/ProcessPage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AIAssistantPage from './pages/AIAssistantPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ai-assistant" element={<AIAssistantPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
