import React from 'react';
import { ArrowRight, RefreshCw, Target, CreditCard } from 'lucide-react';

const LowTicketSystem: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            The Low-Ticket System <br />
            Converts Cold Traffic at <span className="text-brand-400">$0 Cost.</span>
          </h2>
          
          <div className="space-y-4 text-lg md:text-xl text-slate-400 font-light">
            <p>
              Instead of asking cold traffic to leap from stranger <ArrowRight className="inline w-4 h-4 mx-1" /> $2,000 buyer in one jump, you ask them to take a small step:
            </p>
            <p className="font-bold text-brand-200">
              Buy a $6-$26 product that solves ONE immediate, pressing problem.
            </p>
          </div>
        </div>

        {/* The 3 Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-brand-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-brand-400 mb-8 shadow-inner border border-white/5">
              1
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Convert Strangers</h3>
            
            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              Cold strangers will never buy your $2,000 program directly from an ad. They don't trust you enough. But they <span className="italic text-white">WILL</span> pull out their credit card for $13 if it promises to solve one specific pain point.
            </p>

            <div className="pt-6 border-t border-white/5">
              <p className="text-sm font-bold text-white">
                Your low-ticket product becomes the <span className="text-brand-400 uppercase">BRIDGE.</span>
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-accent-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-accent-400 mb-8 shadow-inner border border-white/5">
              2
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Acquire Buyers</h3>
            
            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              Free leads are tourists. Buyers are different. When someone pulls out their card—even for $13—they are publicly declaring: <span className="italic">"I have this problem. I believe you can solve it. I'm willing to spend my hard earned money to fix it."</span>
            </p>

            <div className="pt-6 border-t border-white/5 flex items-center gap-2">
              <Target className="w-4 h-4 text-accent-400" />
              <p className="text-sm font-bold text-white">
                They've self-selected as <span className="text-accent-400 uppercase">HIGH-INTENT.</span>
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-green-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
            
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl font-bold text-green-400 mb-8 shadow-inner border border-white/5">
              3
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Get Back Ad Spend Daily</h3>
            
            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              The funnel pays for itself. You're not burning cash. You're getting paid to build a list of buyers who are already warmed up.
            </p>

            <div className="pt-6 border-t border-white/5 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-green-400" />
              <p className="text-sm font-bold text-white">
                Liquidate your ad cost <span className="text-green-400">immediately.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LowTicketSystem;