
const fs = require('fs');
const path = require('path');

const folders = [
  'components',
  'services'
];

const files = {
  'package.json': `{
  "name": "marketing-31-vsl",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/genai": "^1.30.0",
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}`,

  'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["**/*.ts", "**/*.tsx"]
}`,

  'netlify.toml': `[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"`,

  'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marketing 31 | Scale Your Business</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
              brand: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                500: '#0ea5e9',
                600: '#0284c7',
                900: '#0c4a6e',
                950: '#082f49',
              },
              accent: {
                500: '#8b5cf6', // Violet
              }
            },
            animation: {
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'float': 'float 6s ease-in-out infinite',
              'fade-in-up': 'fadeInUp 0.5s ease-out',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              }
            }
          },
        },
      }
    </script>
    <style>
      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0f172a; 
      }
      ::-webkit-scrollbar-thumb {
        background: #334155; 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #475569; 
      }
      body {
        background-color: #020617; /* slate-950 */
        color: #f8fafc;
      }
    </style>
</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>`,

  'index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  'types.ts': `export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  result: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}`,

  'App.tsx': `import React from 'react';
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

export default App;`,

  'services/gemini.ts': `import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateStrategyResponse = async (userInput: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = \`
      You are "Mark", a senior growth strategist at Marketing 31. 
      Your goal is to briefly analyze the user's business input and suggest 1-2 high-impact marketing strategies 
      that Marketing 31 could implement for them.
      Keep the tone professional, direct, and slightly exclusive ("we only work with the best").
      End with a strong call to action to book a call for a full audit.
      Keep the response under 100 words.
    \`;

    const response = await ai.models.generateContent({
      model,
      contents: userInput,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'd love to discuss this further on a call. Our team can build a custom roadmap for you.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently analyzing high volumes of data. Please book a call directly to speak with a human strategist.";
  }
};`,

  'components/Navbar.tsx': `import React, { useState, useEffect } from 'react';
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
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-500 \${
        isScrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }\`}
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

export default Navbar;`,

  'components/Hero.tsx': `import React from 'react';
import { Play, Volume2, TrendingUp, Users, DollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 contrast-150"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up hover:border-brand-500/50 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Accepting 3 New Partners for October</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-white">
          Scale Your Agency To <br />
          <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-accent-500 bg-clip-text text-transparent">
            $100k/Month
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
          We build automated client acquisition infrastructures for B2B agencies. 
          Stop relying on referrals. Start predicting revenue.
        </p>

        {/* VSL Container */}
        <div className="relative w-full max-w-4xl group perspective-1000 mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-slate-950 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
            
            {/* Fake UI Header */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 pointer-events-none">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Marketing 31 Protocol</div>
            </div>

            {/* Placeholder for Video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-slate-800/80 transition-colors cursor-pointer bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center">
               <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
               
               <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300 shadow-xl shadow-black/20">
                  <Play className="w-8 h-8 text-white ml-1 fill-white" />
               </div>
               <p className="relative z-10 mt-8 text-sm font-semibold text-white uppercase tracking-[0.2em] animate-pulse">Watch The Breakdown</p>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Volume2 className="w-3 h-3" />
                <span>TAP TO UNMUTE</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
           <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
             Book Your Growth Audit
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full animate-ping"></span>
           </button>
           
           {/* Social Proof Strip */}
           <div className="mt-12 pt-12 border-t border-white/5 w-full">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-6">Trusted by 50+ High-Growth Agencies</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  {['Flux', 'Vertex', 'Nexus', 'Orbit', 'Sphere'].map((name, i) => (
                      <div key={i} className="flex items-center gap-2 font-display font-bold text-xl text-white">
                          <div className={\`w-6 h-6 rounded bg-gradient-to-tr \${i % 2 === 0 ? 'from-white to-slate-400' : 'from-slate-400 to-white'}\`}></div>
                          {name}
                      </div>
                  ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;`,

  'components/Features.tsx': `import React from 'react';
import { Target, Zap, BarChart3, Rocket, Mail, Database, Search, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20">
           <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">The Mechanism</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Complete Acquisition Infrastructure</h2>
           <p className="text-slate-400 max-w-2xl text-lg">We don't just run ads. We install a complete, end-to-end client acquisition system into your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1 - Large */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-brand-500/30 transition-all group overflow-hidden relative">
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Target className="w-32 h-32 text-brand-500 rotate-12" />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 border border-brand-500/20 text-brand-500">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Hyper-Targeted Lead Sourcing</h3>
                    <p className="text-slate-400 leading-relaxed max-w-md">We scrape and enrich data from 15+ sources to identify companies that are actively looking for your services right now. No wasted ad spend.</p>
                </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-brand-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 text-purple-500">
                  <Mail className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Cold Outreach Protocol</h3>
             <p className="text-slate-400 text-sm">Multi-channel campaigns that land directly in the primary inbox, not spam.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-brand-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 text-blue-500">
                  <MessageSquare className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white mb-3">Appointment Setting</h3>
             <p className="text-slate-400 text-sm">US-based setters trained to qualify leads and book them directly into your calendar.</p>
          </div>

          {/* Card 4 - Large */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-brand-500/30 transition-all group overflow-hidden relative">
             <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-30 transition-opacity">
                <BarChart3 className="w-64 h-64 text-white" />
             </div>
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 text-green-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">The Conversion Ecosystem</h3>
                <p className="text-slate-400 leading-relaxed max-w-lg">From VSL landing pages to automated nurture sequences, we build the assets that turn "interested" into "paid".</p>
                
                <div className="mt-8 flex gap-4">
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        Higher conversion rates
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        Lower CPA
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;`,

  'components/Results.tsx': `import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="max-w-3xl">
            <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">Proven Performance</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Results Over Everything.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl">
              We don't hide behind vanity metrics. We measure our success by the revenue we add to your bank account.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
             <div className="text-5xl font-display font-bold text-white">$12M+</div>
             <div className="text-slate-500 text-sm uppercase tracking-widest">Client Revenue Generated</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">S</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-brand-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">$145k/mo</h3>
                    <p className="text-slate-400 font-mono text-sm">Added Annual Recurring Revenue</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "We were stuck at $30k/mo for 2 years. Marketing 31 revamped our entire offer and outreach system. We hit $100k/mo in 5 months."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Sam K.</span>
                            <span className="block text-slate-500">Founder, Scale Labs</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">A</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-accent-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">38 Calls</h3>
                    <p className="text-slate-400 font-mono text-sm">Qualified Booked Appointments / Month</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "Our calendar was empty. Now we have to hire a second closer just to handle the volume. The quality of leads is insane."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Alex R.</span>
                            <span className="block text-slate-500">CEO, Apex Creative</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">V</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">6.5x ROI</h3>
                    <p className="text-slate-400 font-mono text-sm">Return on Ad Spend (ROAS)</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "We tried ads before and burned cash. Marketing 31's funnel converted cold traffic profitably from day 1."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Victor M.</span>
                            <span className="block text-slate-500">Director, Vision Media</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Results;`,

  'components/AiChat.tsx': `import React, { useState, useRef, useEffect } from 'react';
import { generateStrategyResponse } from '../services/gemini';
import { ChatMessage, LoadingState } from '../types';
import { Send, Bot, User, Sparkles, X } from 'lucide-react';

const AiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Mark, your AI Growth Consultant. Tell me about your agency and your current revenue goals.' }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    const responseText = await generateStrategyResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoadingState(LoadingState.SUCCESS);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-lg shadow-brand-500/30 transition-all hover:scale-105 animate-bounce-subtle"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-bold">Get Instant Audit</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 md:right-6 w-[90vw] md:w-[400px] h-[550px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-slate-950 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">AI Consultant</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-slate-400">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={\`flex items-start gap-3 \${msg.role === 'user' ? 'flex-row-reverse' : ''}\`}>
                <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 \${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-900/50'}\`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-brand-400" />}
                </div>
                <div className={\`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed \${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-tr-none' 
                    : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/5'
                }\`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex items-center gap-2 text-xs text-slate-500 ml-12">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-100">●</span>
                <span className="animate-bounce delay-200">●</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950 border-t border-white/5">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="E.g., I run an SEO agency doing $20k/mo..."
                className="w-full bg-slate-900 text-white text-sm rounded-xl px-4 py-3 pr-12 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none resize-none h-12 overflow-hidden"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loadingState === LoadingState.LOADING}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-500 hover:text-brand-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-600 mt-2">
              Powered by Gemini 2.5 Flash. AI can make mistakes.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChat;`,

  'components/Booking.tsx': `import React from 'react';
import { Calendar, Check, Clock, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] p-8 md:p-16 border border-white/10 overflow-hidden relative">
          
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-brand-500/10 rounded-full border border-brand-500/20 text-brand-400 font-mono text-xs font-bold mb-6">
                STEP 3 OF 3: THE STRATEGY SESSION
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Ready To Scale Your Agency?
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Book a 15-minute introductory call to see if our infrastructure is compatible with your business model. We only partner with 5 agencies per month to ensure results.
              </p>

              <div className="space-y-6">
                 {[
                   "Crystal clear roadmap to $100k/mo",
                   "Identify bottlenecks in your current funnel",
                   "See our live client results & backend systems"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                   </div>
                 ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="https://picsum.photos/100/100?random=50" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                    <img src="https://picsum.photos/100/100?random=51" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                    <img src="https://picsum.photos/100/100?random=52" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-yellow-500 mb-0.5">
                      {'★★★★★'}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Rated 4.9/5 by 50+ Agencies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-2xl h-[600px] w-full shadow-2xl overflow-hidden flex flex-col">
              {/* Mock Calendar Header */}
              <div className="p-6 border-b flex items-center justify-between bg-white">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">M</div>
                    <div>
                       <h4 className="font-bold text-slate-900">Marketing 31 Team</h4>
                       <p className="text-xs text-slate-500">Growth Consultation</p>
                    </div>
                 </div>
                 <div className="text-slate-400">
                    <Clock className="w-5 h-5" />
                 </div>
              </div>
              
              {/* Mock Calendar Body */}
              <div className="flex-1 p-6 md:p-8 bg-slate-50">
                 <h3 className="text-xl font-bold text-slate-900 mb-6">Select a Date & Time</h3>
                 
                 {/* Calendar Grid Simulation */}
                 <div className="bg-white p-4 rounded-xl border shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-4">
                       <span className="font-bold text-slate-800">October 2024</span>
                       <div className="flex gap-2">
                          <button className="p-1 hover:bg-slate-100 rounded">&lt;</button>
                          <button className="p-1 hover:bg-slate-100 rounded">&gt;</button>
                       </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                        <span className="text-xs text-slate-400 py-2">S</span>
                        <span className="text-xs text-slate-400 py-2">M</span>
                        <span className="text-xs text-slate-400 py-2">T</span>
                        <span className="text-xs text-slate-400 py-2">W</span>
                        <span className="text-xs text-slate-400 py-2">T</span>
                        <span className="text-xs text-slate-400 py-2">F</span>
                        <span className="text-xs text-slate-400 py-2">S</span>
                        
                        {/* Days */}
                        {Array.from({length: 31}).map((_, i) => {
                           const isAvailable = i > 12 && i < 28 && i % 7 !== 0 && i % 7 !== 6;
                           const isSelected = i === 15;
                           return (
                             <div 
                               key={i} 
                               className={\`
                                 aspect-square flex items-center justify-center rounded-full text-sm
                                 \${isSelected ? 'bg-slate-900 text-white font-bold' : ''}
                                 \${isAvailable && !isSelected ? 'text-slate-700 hover:bg-slate-100 cursor-pointer font-medium bg-slate-50' : ''}
                                 \${!isAvailable ? 'text-slate-300' : ''}
                               \`}
                             >
                               {i+1}
                             </div>
                           )
                        })}
                    </div>
                 </div>

                 {/* Time Slots */}
                 <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 border border-slate-900 bg-slate-900 text-white rounded-lg font-medium text-sm transition-all hover:opacity-90">09:00 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">09:30 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">10:00 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">11:30 AM</button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;`,

  'components/Footer.tsx': `import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5 text-slate-400 text-sm">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-xl font-display font-bold text-white block mb-2">MARKETING 31</span>
          <p>© {new Date().getFullYear()} Marketing 31. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`,

  '.env': 'API_KEY=your_gemini_api_key_here'
};

// Create folders
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`Created folder: ${folder}`);
  }
});

// Create files
Object.entries(files).forEach(([fileName, content]) => {
  fs.writeFileSync(fileName, content);
  console.log(`Created file: ${fileName}`);
});

console.log('Project setup complete!');
console.log('Run "npm install" then "npm run dev" to start.');
