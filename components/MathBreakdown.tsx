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
                    For example: let's say you're selling a $13 product. The cost per customer will on average be 2X the product price, so $26 in this case.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch relative z-10">
                {/* Left Column: The Math */}
                <div className="space-y-8">
                    {/* Ad Spend Row */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-950 border border-white/10">
                        <span className="text-slate-300 font-medium text-lg">Spend on Ads:</span>
                        <span className="text-red-500 font-bold font-mono text-2xl">$2,600</span>
                    </div>

                    {/* Revenue Rows Container */}
                    <div className="space-y-3 px-2 md:px-4">
                         
                         {/* Header Row */}
                         <div className="grid grid-cols-12 text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold mb-2 pb-2 border-b border-white/5">
                            <div className="col-span-5">Item</div>
                            <div className="col-span-2 text-right">Price</div>
                            <div className="col-span-2 text-right">Rate</div>
                            <div className="col-span-3 text-right">Rev</div>
                         </div>

                         {/* Main Offer */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-slate-300 font-medium">Main Offer</div>
                            <div className="col-span-2 text-right text-slate-500">$13</div>
                            <div className="col-span-2 text-right text-slate-500">100%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$1,300</div>
                         </div>

                         {/* Order Bump 1 */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-brand-400 font-medium">Order Bump 1</div>
                            <div className="col-span-2 text-right text-slate-500">$11</div>
                            <div className="col-span-2 text-right text-slate-500">30%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$330</div>
                         </div>

                         {/* Order Bump 2 */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-brand-400 font-medium">Order Bump 2</div>
                            <div className="col-span-2 text-right text-slate-500">$17</div>
                            <div className="col-span-2 text-right text-slate-500">25%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$425</div>
                         </div>

                         {/* Upsell 1 */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-accent-400 font-medium">Upsell 1</div>
                            <div className="col-span-2 text-right text-slate-500">$67</div>
                            <div className="col-span-2 text-right text-slate-500">20%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$1,340</div>
                         </div>

                         {/* Upsell 2 */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-accent-400 font-medium">Upsell 2</div>
                            <div className="col-span-2 text-right text-slate-500">$97</div>
                            <div className="col-span-2 text-right text-slate-500">10%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$970</div>
                         </div>

                         {/* Mid-Ticket */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-green-400 font-medium">Mid-Ticket</div>
                            <div className="col-span-2 text-right text-slate-500">$997</div>
                            <div className="col-span-2 text-right text-slate-500">4%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$3,988</div>
                         </div>

                         {/* High-Ticket */}
                         <div className="grid grid-cols-12 items-center text-sm md:text-base py-1">
                            <div className="col-span-5 text-green-500 font-medium">High-Ticket</div>
                            <div className="col-span-2 text-right text-slate-500">$5,000</div>
                            <div className="col-span-2 text-right text-slate-500">1%</div>
                            <div className="col-span-3 text-right text-white font-bold font-mono">$5,000</div>
                         </div>

                    </div>
                </div>

                {/* Right Column: The Result */}
                <div className="bg-gradient-to-br from-green-500/5 to-slate-950 rounded-3xl border border-green-500/20 p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/5 blur-xl"></div>
                    <div className="relative z-10">
                        <p className="text-green-400 font-bold text-xl mb-4">Total Revenue Back:</p>
                        <div className="text-5xl lg:text-7xl font-display font-bold text-green-400 mb-8 tracking-tighter">
                            $13,353
                        </div>
                        <div className="text-slate-300 space-y-3 text-lg leading-relaxed">
                            <p>You spent <span className="text-white font-bold">$2,600</span>. You made <span className="text-white font-bold">$13,353</span> immediately.</p>
                            <p className="pt-6 border-t border-green-500/20 mt-6 text-white font-bold">
                                And you added <span className="text-green-400">100 Buyers</span> to your list for free.
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