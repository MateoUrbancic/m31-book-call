import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Results from './components/Results';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import Problem from './components/Problem';
import Qualifiers from './components/Qualifiers';
import FAQ from './components/FAQ';
import ContentTreadmill from './components/ContentTreadmill';
import TrustGap from './components/TrustGap';
import FailedSystems from './components/FailedSystems';
import MathBreakdown from './components/MathBreakdown';
import ImplementationProcess from './components/ImplementationProcess';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />

        <ContentTreadmill />
        <FailedSystems />
        <TrustGap />
        <Features />
        <MathBreakdown />
        <ImplementationProcess />
        <Results />
        <Qualifiers />
        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;