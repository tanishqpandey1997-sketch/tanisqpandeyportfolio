import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './lib/AuthContext';

// Lazy load non-critical pages for better performance
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AIAssistantPage = lazy(() => import('./pages/AIAssistantPage'));

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-black">
    <Loader2 className="h-8 w-8 animate-spin text-white/20" />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
