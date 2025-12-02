import React, { useState } from 'react';

const MathBreakdown: React.FC = () => {
  const [adSpend, setAdSpend] = useState(2600);

  // Core metrics derived from the base scenario
  // Base scenario: $2,600 spend -> 100 buyers. CPA = $26.
  const CPA = 26;
  const buyers = Math.floor(adSpend / CPA);

  const items = [
    { name: 'Main Offer', price: 13, rate: 1.0, color: 'text-slate-300' },
    { name: 'Order Bump 1', price: 11, rate: 0.3, color: 'text-brand-400' },
    { name: 'Order Bump 2', price: 17, rate: 0.25, color: 'text-brand-400' },
    { name: 'Upsell 1', price: 67, rate: 0.2, color: 'text-accent-400' },
    { name: 'Upsell 2', price: 97, rate: 0.1, color: 'text-accent-400' },
    { name: 'Mid-Ticket', price: 997, rate: 0.04, color: 'text-green-400' },
    { name: 'High-Ticket', price: 5000, rate: 0.01, color: 'text-green-500' },
  ];

  // Calculate dynamic revenue for each item
  const calculatedItems = items.map(item => ({
    ...item,
    revenue: buyers * item.price * item.rate
  }));

  const totalRevenue = calculatedItems.reduce((acc, item) => acc + item.revenue, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

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
                    Let's say we're selling a $13 product on the front-end. The cost per customer averages 2X product price. Use the slider below to see how the numbers scale.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch relative z-10">
                {/* Left Column: The Math */}
                <div className="space-y-8">
                    {/* Ad Spend Control */}
                    <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <label htmlFor="adSpend" className="text-slate-300 font-medium text-lg">Spend on Ads:</label>
                            <div className="text-red-500 font-bold font-mono text-2xl bg-slate-900 border border-red-500/20 px-4 py-1 rounded-lg min-w-[120px] text-center shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                               {formatCurrency(adSpend)}
                            </div>
                        </div>
                        <div className="relative pt-2">
                             <input 
                                type="range" 
                                id="adSpend"
                                min="2600" 
                                max="52000" 
                                step="26" 
                                value={adSpend}
                                onChange={(e) => setAdSpend(Number(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500 hover:accent-red-400 transition-all"
                            />
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 font-mono">
                            <span>Min: $2.6k</span>
                            <span>Max: $52k</span>
                        </div>
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

                         {calculatedItems.map((item, index) => (
                             <div key={index} className="grid grid-cols-12 items-center text-sm md:text-base py-1 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded px-1">
                                <div className={`col-span-5 font-medium ${item.color}`}>{item.name}</div>
                                <div className="col-span-2 text-right text-slate-500">${item.price.toLocaleString()}</div>
                                <div className="col-span-2 text-right text-slate-500">{(item.rate * 100)}%</div>
                                <div className="col-span-3 text-right text-white font-bold font-mono">{formatCurrency(item.revenue)}</div>
                             </div>
                         ))}

                    </div>
                </div>

                {/* Right Column: The Result */}
                <div className="bg-gradient-to-br from-green-500/5 to-slate-950 rounded-3xl border border-green-500/20 p-10 flex flex-col justify-center relative overflow-hidden transition-all duration-300">
                    <div className="absolute inset-0 bg-green-500/5 blur-xl"></div>
                    <div className="relative z-10">
                        <p className="text-green-400 font-bold text-xl mb-4">Total Revenue Back:</p>
                        <div className="text-5xl lg:text-7xl font-display font-bold text-green-400 mb-8 tracking-tighter tabular-nums transition-all">
                            {formatCurrency(totalRevenue)}
                        </div>
                        <div className="text-slate-300 space-y-3 text-lg leading-relaxed">
                            <p>You spent <span className="text-white font-bold">{formatCurrency(adSpend)}</span>. You made <span className="text-white font-bold">{formatCurrency(totalRevenue)}</span> immediately.</p>
                            <p className="pt-6 border-t border-green-500/20 mt-6 text-white font-bold">
                                And you added <span className="text-green-400">{formatNumber(buyers)} Buyers</span> to your list for free.
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