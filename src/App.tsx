import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomeButton from './components/ui/HomeButton';
import Home from './pages/Home';
import AiAssistant from './pages/AiAssistant';
import Videos from './pages/Videos';
import Calculator from './pages/Calculator';
import Quiz from './pages/Quiz';
import News from './pages/News';




export default function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-assistant" element={<AiAssistant />} />

          <Route path="/videos" element={<Videos />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <HomeButton />
      </PageLayout>
    </Router>
  );
}