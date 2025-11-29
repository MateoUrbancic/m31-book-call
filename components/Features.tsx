import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center md:text-left">
           <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">The Mechanism</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Complete Acquisition Infrastructure</h2>
           <p className="text-slate-400 max-w-2xl text-lg">We don't just run ads. We install a complete, end-to-end client acquisition system into your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-blue-900/20">
                1
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Low-Ticket Offer & Funnel</h3>
             <p className="text-slate-400 leading-relaxed">
               We'll create a compelling low-ticket product (typically $6-$26) that serves as the perfect bridge. This includes the complete sales funnel with high-converting sales pages, checkout flows, one-click upsells and delivery automation.
             </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-purple-900/20">
                2
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Ad Creatives & Campaign Strategy</h3>
             <p className="text-slate-400 leading-relaxed">
               We'll design and write all your ad creatives—from static images to video ads—and build out your entire advertising campaign strategy so you can profitably acquire customers from day one.
             </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-indigo-900/20">
                3
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Upsell & Monetization System</h3>
             <p className="text-slate-400 leading-relaxed">
               We'll implement order bumps, one-click upsells, and downsells that maximize revenue per customer. This is what allows you to liquidate your ad spend on the frontend.
             </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-pink-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-pink-900/20">
                4
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Backend Ascension Path</h3>
             <p className="text-slate-400 leading-relaxed">
               We'll create the automated email sequences and retargeting systems that nurture your low-ticket buyers and convert them into your high-ticket coaching programs, communities, or courses.
             </p>
          </div>

          {/* Card 5 - Full Width */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-teal-500/30 transition-all group">
             <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg shadow-teal-900/20">
                5
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Complete Technical Setup</h3>
             <p className="text-slate-400 leading-relaxed">
               From payment processing to email automation to ad account configuration—we handle all the technical implementation so you can focus on running your business.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;