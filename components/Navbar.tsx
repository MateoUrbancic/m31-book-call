import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white">
              MARKETING<span className="text-brand-500">31</span>
            </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#process" className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Method</a>
          <a href="#results" className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">Results</a>
          <a href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">FAQ</a>
          <button 
            onClick={scrollToBooking}
            className="group flex items-center gap-2 px-5 py-2 bg-white text-slate-950 rounded-full font-bold text-sm hover:bg-slate-200 transition-all transform hover:scale-105"
          >
            Book Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in-up">
           <a href="#process" className="text-lg text-slate-300 hover:text-white font-display" onClick={() => setIsMobileMenuOpen(false)}>Method</a>
          <a href="#results" className="text-lg text-slate-300 hover:text-white font-display" onClick={() => setIsMobileMenuOpen(false)}>Results</a>
          <a href="#faq" className="text-lg text-slate-300 hover:text-white font-display" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <button 
            onClick={() => {
              scrollToBooking();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-center py-4 bg-white text-slate-950 rounded-lg font-bold"
          >
            Book Strategy Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;