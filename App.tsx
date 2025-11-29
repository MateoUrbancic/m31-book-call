import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Results from './components/Results';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AiChat from './components/AiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Results />
        <Booking />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;