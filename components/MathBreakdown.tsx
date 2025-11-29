import React from 'react';

const MathBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] border border-white/10 p-8 md:p-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Here's Exactly How The Math Works:
                </h2>
                <p className="text-slate-400 text-lg">
                    You're not just selling a $13 product. You're selling a system.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch relative z-10">
                {/* Left Column: The Math */}
                <div className="space-y-8">
                    {/* Ad Spend Row */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-white/10">
                        <span className="text-slate-300 font-medium text-lg">Spend on Ads:</span>
                        <span className="text-red-500 font-bold font-mono text-2xl">$1,000</span>
                    </div>

                    {/* Revenue Rows Container */}
                    <div className="space-y-6 px-4">
                         <div className="flex items-center justify-between text-lg">
                            <span className="text-slate-400">Acquire 50 Buyers:</span>
                            <span className="text-slate-400 font-mono">50 x $13 = <span className="text-white font-bold ml-2">$650</span></span>
                         </div>
                         <div className="flex items-center justify-between text-lg">
                            <span className="text-brand-400">15 Order Bumps (30%):</span>
                            <span className="text-slate-400 font-mono">15 x $17 = <span className="text-white font-bold ml-2">$255</span></span>
                         </div>
                         <div className="flex items-center justify-between text-lg">
                            <span className="text-accent-400">10 Upsells (20%):</span>
                            <span className="text-slate-400 font-mono">10 x $67 = <span className="text-white font-bold ml-2">$670</span></span>
                         </div>
                         <div className="flex items-center justify-between text-lg">
                            <span className="text-green-400">3 Upsells (6%):</span>
                            <span className="text-slate-400 font-mono">3 x $97 = <span className="text-white font-bold ml-2">$291</span></span>
                         </div>
                    </div>
                </div>

                {/* Right Column: The Result */}
                <div className="bg-gradient-to-br from-green-500/5 to-slate-950 rounded-3xl border border-green-500/20 p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/5 blur-xl"></div>
                    <div className="relative z-10">
                        <p className="text-green-400 font-bold text-xl mb-4">Total Revenue Back:</p>
                        <div className="text-7xl font-display font-bold text-green-400 mb-8 tracking-tighter">
                            $1,866
                        </div>
                        <div className="text-slate-300 space-y-3 text-lg leading-relaxed">
                            <p>You spent <span className="text-white font-bold">$1,000</span>. You made <span className="text-white font-bold">$1,866</span> immediately.</p>
                            <p className="pt-6 border-t border-green-500/20 mt-6 text-white font-bold">
                                And you added <span className="text-green-400">50 Buyers</span> to your list for free.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MathBreakdown;