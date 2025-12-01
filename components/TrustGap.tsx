import React from 'react';
import { User, DollarSign, XCircle, ArrowDown } from 'lucide-react';

const TrustGap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-900/50 rounded-[100%] blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Text Content - Left Aligned & Width Constrained */}
        <div className="max-w-2xl w-full mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white text-center mb-8 leading-tight">
             The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Trust</span> Gap
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-slate-300 text-left font-light leading-relaxed">
             <p className="font-medium text-white text-xl text-center mb-10">
               There is an invisible trust gap destroying your ad performance.
             </p>
             
             <p>
               To understand it, you have to look at why your organic marketing works so well.
             </p>

             <p>
               When someone buys your high-ticket offer from your YouTube channel or Instagram, they have likely consumed hours of your content. They know your story, they’ve seen your results, and they trust you.
             </p>
             
             <p>
               <span className="text-white font-bold border-b border-blue-500/50">The trust gap has already been closed by time.</span>
             </p>

             <p className="mt-6">
               But when you run paid ads, you are talking to <span className="text-blue-400 font-bold">Cold Traffic.</span>
             </p>

             <p>
               These are strangers who have known you for exactly 3 seconds. They don’t know if you are an expert or a scammer. They don’t know if your results are real.
             </p>
             
             <p className="mt-6 font-bold text-white">
               And this is where the traditional funnels fail:
             </p>

             <div className="space-y-4 my-6 pl-2">
                <div className="flex gap-4">
                   <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                   <p>Asking them to watch a <span className="text-white font-bold">90-minute webinar</span> is asking for a massive time commitment from a stranger who doesn't trust you yet.</p>
                </div>
                <div className="flex gap-4">
                   <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                   <p>Asking them to <span className="text-white font-bold">book a call</span> is asking them to get sold to by a stranger.</p>
                </div>
                <div className="flex gap-4">
                   <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                   <p>Asking them to download a <span className="text-white font-bold">free PDF</span> signals that your advice is cheap, attracting people who have no intention of paying.</p>
                </div>
             </div>
             
             <div className="my-16 border-t border-b border-white/5 py-10">


                <p className="mb-6">
                    When you try to use your "warm traffic" strategies on "cold traffic," you are trying to force a stranger to leap across that trust gap instantly.
                </p>

                <p className="mb-6">
                    You are essentially asking for marriage (a high-ticket sale) before you've even bought them a drink.
                </p>

                <p>
                    That is why your conversion rates plummet from <span className="text-green-400 font-bold">10–30%</span> on warm traffic to <span className="text-red-400 font-bold">0–2%</span> on cold traffic.
                </p>
             </div>

             <p className="text-white text-2xl">
                You don't need "better targeting" or "flashier ads."
             </p>

             <div className="bg-gradient-to-br from-brand-900/40 to-slate-900 border border-brand-500/30 p-8 rounded-2xl shadow-xl mt-8">
                <h4 className="text-3xl font-display font-bold text-white mb-4 flex items-center gap-3">
                    You Need a Better System.
                </h4>
                <p className="text-lg text-slate-300 mb-6">
                    You need a way to turn a skeptical stranger into a trusting customer before you ask them to buy your high-ticket offer.
                </p>
                <p className="text-brand-400 font-bold text-xl border-l-4 border-brand-500 pl-4">
                    And the only way to do that is with a low-ticket offer.
                </p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustGap;