import React from 'react';
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

export default Features;