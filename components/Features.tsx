import React from 'react';
import { ArrowRight, Target, MousePointer2, Zap, CreditCard, TrendingUp, Phone, MessageSquare, Video, ArrowDown, Database, Mail, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20">
           <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">The Mechanism</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Complete Acquisition Infrastructure</h2>
           <p className="text-slate-400 max-w-2xl text-lg">We don't just run ads. We install a complete, end-to-end client acquisition system into your business.</p>
        </div>

        {/* NEW GRAPH: Detailed Flowchart - WIDER CONTAINER */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-20">
            <div className="w-full overflow-x-auto pb-6 select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="min-w-[1000px] lg:min-w-0 lg:w-full bg-slate-900/40 rounded-3xl p-8 pt-24 border border-white/5 flex justify-center gap-4 relative">
                    
                    {/* Section 1: Acquisition */}
                    <div className="relative shrink-0 group">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-950 border border-blue-500/30 text-blue-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                Acquisition
                            </div>
                        </div>

                        <div className="w-[260px] bg-slate-950/50 border border-blue-500/10 rounded-2xl p-6 flex flex-col items-center gap-6 h-full">
                            <div className="flex flex-col items-center gap-2 w-full">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Traffic Source</span>
                                <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-xs font-bold">META ADS</div>
                            </div>
                            <ArrowDown className="text-slate-700 w-5 h-5" />
                            <div className="w-full aspect-square bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl shadow-2xl shadow-orange-500/10 flex flex-col items-center justify-center text-center p-6 group cursor-default hover:scale-[1.02] transition-transform">
                                <MousePointer2 className="w-10 h-10 text-white mb-3" />
                                <h3 className="text-2xl font-bold text-white mb-1">Sales Page</h3>
                                <div className="bg-black/20 text-white/90 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Core Offer</div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-slate-700 pt-32 shrink-0 px-2">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* Section 2: Liquidation */}
                    <div className="relative flex-1 max-w-[600px]">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-950 border border-orange-500/30 text-orange-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                                Liquidation
                            </div>
                        </div>

                        <div className="bg-slate-950/50 border border-orange-500/10 rounded-2xl p-6 h-full flex justify-center items-start gap-4 relative">
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
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center text-slate-700 pt-32 shrink-0 px-2">
                        <ArrowRight className="w-6 h-6" />
                    </div>

                    {/* Section 3: Profit */}
                    <div className="relative shrink-0">
                        {/* Label */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                            <div className="bg-slate-950 border border-green-500/30 text-green-400 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                Profit
                            </div>
                        </div>

                        <div className="w-[320px] bg-slate-950/50 border border-green-500/10 rounded-2xl p-6 h-full relative">
                            
                            {/* SVG for curved arrow */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                                <defs>
                                    <marker id="arrowhead-gray" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                                    </marker>
                                </defs>
                                {/* Curve from WhatsApp (left col bottom) to Sales Call (right col top) */}
                                <path 
                                    d="M 140 288 C 180 288, 240 240, 240 138" 
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
                                    
                                    <div className="w-28 py-2 bg-emerald-200 rounded-lg text-emerald-900 text-[10px] font-bold text-center mb-1">Thank You + System</div>
                                    
                                    {/* WhatsApp + Setters */}
                                    <div className="w-28 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-[10px] font-bold text-center shadow-lg">
                                        <span className="text-green-400">WhatsApp</span> + Setters
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
                                    <div className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full">YES</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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