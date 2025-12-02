import React from 'react';
import { ArrowDown, ArrowRight, MousePointer2, CreditCard, TrendingUp, Video, Phone } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
           <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">The Mechanism</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Low-Ticket System</h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-center">We don't just run ads to a low-ticket product. We install a complete, end-to-end client acquisition system into your business.</p>
        </div>

        {/* NEW GRAPH: Detailed Flowchart - WIDER CONTAINER */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-20 relative group">
            
            {/* Mobile Scroll Indicator */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-4 text-brand-400 animate-pulse">
                <span className="text-xs font-bold uppercase tracking-widest">Swipe to view full system</span>
                <ArrowRight className="w-4 h-4" />
            </div>

            <div className="w-full overflow-x-auto pb-6 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
                <div className="min-w-max lg:min-w-0 lg:w-full bg-slate-900/40 rounded-3xl p-8 pt-24 border border-white/5 flex justify-start lg:justify-center gap-4 relative items-start">
                    
                    {/* Section 1: Acquisition */}
                    <div className="relative shrink-0 group w-[260px] flex flex-col gap-6">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-850 border border-blue-500/30 text-blue-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                Acquisition
                            </div>
                        </div>

                        <div className="w-full bg-slate-950/50 border border-blue-500/10 rounded-2xl p-6 flex flex-col items-center gap-6 min-h-[340px]">
                            <div className="flex flex-col items-center gap-2 w-full">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Traffic Source</span>
                                <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-xs font-bold">META ADS</div>
                            </div>
                            <ArrowDown className="text-slate-700 w-5 h-5" />
                            <div className="h-40 w-full bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl shadow-2xl shadow-orange-500/10 flex flex-col items-center justify-center text-center p-6 group cursor-default hover:scale-[1.02] transition-transform">
                                <MousePointer2 className="w-10 h-10 text-white mb-3" />
                                <h3 className="text-2xl font-bold text-white mb-1">Sales Page</h3>
                                <div className="bg-black/20 text-white/90 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Low-Ticket Offer</div>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="px-2">
                             <h4 className="text-blue-400 font-bold mb-3 font-display">The Buyer Filter</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                We run ads to a high-value, low-ticket product ($5–$25) instead of a freebie. This instantly bridges the "Stranger-to-Sale" gap and filters out tire-kickers, ensuring you only fill your pipeline with people willing to pull out their credit card.
                             </p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-slate-700 pt-32 shrink-0 px-2">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* Section 2: Liquidation */}
                    <div className="relative flex-1 max-w-[600px] flex flex-col gap-6">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-950 border border-orange-500/30 text-orange-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                Liquidation
                            </div>
                        </div>

                        <div className="bg-slate-950/50 border border-orange-500/10 rounded-2xl p-6 min-h-[340px] flex justify-center gap-4 relative">
                                {/* Checkout Group */}
                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="w-28 h-24 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center text-center p-2">
                                        <CreditCard className="w-5 h-5 text-white mb-2" />
                                        <span className="text-white font-bold text-sm">Checkout</span>
                                    </div>
                                    <ArrowDown className="text-slate-700 w-4 h-4" />
                                    <div className="w-28 py-2 bg-amber-400 rounded-lg text-amber-950 text-[10px] font-bold text-center shadow-lg shadow-amber-500/10">Order Bump #1</div>
                                    <div className="w-28 py-2 bg-amber-400 rounded-lg text-amber-950 text-[10px] font-bold text-center shadow-lg shadow-amber-500/10">Order Bump #2</div>
                                </div>

                                {/* Arrow */}
                                <div className="pt-16 text-slate-700 shrink-0"><ArrowRight className="w-4 h-4" /></div>

                                {/* Upsell 1 Group */}
                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="w-28 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/20 flex flex-col items-center justify-center text-center p-2">
                                        <TrendingUp className="w-5 h-5 text-white mb-2" />
                                        <span className="text-white font-bold text-sm">Upsell 1</span>
                                    </div>
                                    <ArrowDown className="text-slate-700 w-4 h-4" />
                                    <div className="w-28 py-2 bg-orange-700 rounded-lg text-orange-100 text-[10px] font-bold text-center">Downsell 1</div>
                                </div>

                                {/* Arrow */}
                                <div className="pt-16 text-slate-700 shrink-0"><ArrowRight className="w-4 h-4" /></div>

                                {/* Upsell 2 Group */}
                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="w-28 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/20 flex flex-col items-center justify-center text-center p-2">
                                        <TrendingUp className="w-5 h-5 text-white mb-2" />
                                        <span className="text-white font-bold text-sm">Upsell 2</span>
                                    </div>
                                    <ArrowDown className="text-slate-700 w-4 h-4" />
                                    <div className="w-28 py-2 bg-orange-700 rounded-lg text-orange-100 text-[10px] font-bold text-center">Downsell 2</div>
                                </div>
                        </div>

                         {/* Description Text */}
                         <div className="px-2">
                             <h4 className="text-orange-400 font-bold mb-3 font-display">The Ad Spend Cover</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                Through a sequence of order bumps and one-click upsells, we increase the Average Order Value of every customer. The goal is to liquidate your ad cost in 24 hours, giving you a list of new buyers for essentially $0.
                             </p>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-slate-700 pt-32 shrink-0 px-2">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* Section 3: Profit */}
                    <div className="relative shrink-0 w-[320px] flex flex-col gap-6">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-950 border border-green-500/30 text-green-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                Profit
                            </div>
                        </div>

                        <div className="w-full bg-slate-950/50 border border-green-500/10 rounded-2xl p-6 min-h-[340px] relative">
                            
                            {/* SVG for curved arrow */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                                <defs>
                                    <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                    </marker>
                                </defs>
                                {/* Curve from WhatsApp (left col bottom) to Sales Call (right col top) */}
                                <path 
                                    d="M 136 246 C 180 246, 240 220, 240 138" 
                                    fill="none" 
                                    stroke="#64748b" 
                                    strokeWidth="2" 
                                    strokeDasharray="4 4"
                                    markerEnd="url(#arrowhead-gray)"
                                    className="opacity-50"
                                />
                            </svg>

                            <div className="flex justify-between items-start gap-4 relative z-10">
                                {/* VSL/Book Call */}
                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="w-28 h-24 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center text-center p-2 z-10 relative">
                                        <Video className="w-5 h-5 text-white mb-2" />
                                        <span className="text-white font-bold text-sm leading-tight">VSL / <br/>Book Call</span>
                                    </div>
                                    
                                    {/* Dotted Line Logic simulation */}
                                    <div className="h-6 w-px border-l-2 border-dashed border-slate-700"></div>
                                    <div className="bg-slate-800 border border-slate-700 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded">NO</div>
                                    <ArrowDown className="text-slate-700 w-4 h-4" />
                                    
                                    <div className="w-28 py-2 bg-emerald-200 rounded-lg text-emerald-900 text-[10px] font-bold text-center mb-1">Thank You + Database</div>
                                    
                                    {/* WhatsApp + Setters */}
                                    <div className="w-28 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-[10px] font-bold text-center shadow-lg relative z-10">
                                        <span className="text-green-400">WhatsApp + Email + SMS + Setters</span>
                                    </div>
                                </div>

                                {/* Arrow to Sales Call */}
                                <div className="mt-16 -ml-3 mr-0 text-slate-700"><ArrowRight className="w-4 h-4" /></div>

                                {/* Sales Call */}
                                <div className="flex flex-col items-center gap-3 mt-6">
                                    <div className="w-28 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/20 flex flex-col items-center justify-center text-center p-2">
                                        <Phone className="w-5 h-5 text-white mb-2" />
                                        <span className="text-white font-bold text-sm">Sales Call</span>
                                    </div>
                                    
                                    <ArrowDown className="text-slate-700 w-4 h-4" />
                                    <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">YES</div>
                                    
                                </div>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="px-2">
                             <h4 className="text-green-400 font-bold mb-3 font-display">The High-Ticket Ascension</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">
                                Because these leads are now proven buyers who trust you, we ascend them to your high-ticket offer via a VSL or sales call. Since the relationship is established, these calls convert at 10–40% rather than the typical 20%.
                             </p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Fade Overlay for Mobile to indicate scrollability */}
            <div className="lg:hidden absolute top-12 right-0 bottom-6 w-16 bg-gradient-to-l from-slate-950 via-slate-950/50 to-transparent pointer-events-none z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;