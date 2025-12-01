import React from 'react';
import { ArrowRight, Target, MousePointer2, PlayCircle, Zap, CreditCard, TrendingUp, DollarSign, Phone, MessageSquare, Video, ArrowDown } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">The Mechanism</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    The Low-Ticket System
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Instead of asking cold traffic to leap into a high-ticket purchase, we bridge the trust gap with a low-ticket offer that converts them into customers and gets back our ad spend on Day 1.
                </p>
            </div>
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

                        <div className="bg-slate-950/50 border border-orange-500/10 rounded-2xl p-6 h-full flex justify-center items-start gap-8 relative">
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
                                <div className="pt-16 text-slate-700"><ArrowRight className="w-4 h-4" /></div>

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
                                <div className="pt-16 text-slate-700"><ArrowRight className="w-4 h-4" /></div>

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
                            
                            <div className="flex justify-between items-start gap-4">
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
                                    <div className="w-28 py-2 bg-blue-600 rounded-lg text-white text-[10px] font-bold text-center">Email / SMS Nurture</div>
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

        <div className="container mx-auto px-4 md:px-6">
            <div className="w-full max-w-7xl mx-auto">
                {/* 3-Phase Flowchart - Centered & Responsive */}
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-stretch relative z-10">
                    
                    {/* Phase 1 */}
                    <div className="flex-1 min-w-[300px] max-w-md w-full bg-slate-50 rounded-2xl p-8 border border-slate-200 relative shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-purple-500/30">
                            Phase 01
                        </div>
                        <div className="mt-4 text-center">
                            <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-5">
                                <Target className="w-7 h-7 text-purple-600" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">Acquisition</h4>
                            <p className="text-sm text-slate-500 mt-2 mb-8">Capture Attention & Sell the Core Offer</p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-xl p-5 mb-4 shadow-sm flex items-center gap-4 hover:border-purple-200 transition-colors">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                               <MousePointer2 className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Static Image Ads</p>
                                <p className="text-xs text-slate-400">Pattern Interrupts</p>
                            </div>
                        </div>
                        <div className="flex justify-center -my-2 relative z-10"><div className="h-6 w-px bg-slate-200"></div></div>
                        <div className="bg-white border border-slate-100 rounded-xl p-5 mt-2 shadow-sm flex items-center gap-4 hover:border-purple-200 transition-colors">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                                <PlayCircle className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Sales Page</p>
                                <p className="text-xs text-slate-400">$27 - $47 Offer</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center justify-center text-slate-600/50">
                        <ArrowRight className="w-8 h-8" />
                    </div>

                    {/* Phase 2 */}
                    <div className="flex-1 min-w-[300px] max-w-md w-full bg-slate-50 rounded-2xl p-8 border border-slate-200 relative shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                            Phase 02
                        </div>
                         <div className="mt-4 text-center">
                            <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-5">
                                <Zap className="w-7 h-7 text-blue-600" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">Liquidation</h4>
                            <p className="text-sm text-slate-500 mt-2 mb-8">Break Even on Ad Spend Immediately</p>
                        </div>

                         <div className="bg-white border border-slate-100 rounded-xl p-5 mb-4 shadow-sm hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                                    <CreditCard className="w-5 h-5 text-slate-400" />
                                </div>
                                <p className="font-bold text-slate-800 text-sm">CHECKOUT FLOW</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex-1 text-center">
                                    <p className="text-xs font-bold text-slate-600">Bump 1</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex-1 text-center">
                                    <p className="text-xs font-bold text-slate-600">Bump 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center -my-2 relative z-10"><div className="h-6 w-px bg-slate-200"></div></div>
                         <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-2 shadow-sm flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                <TrendingUp className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">One-Click Upsells</p>
                                <p className="text-xs text-slate-500">2x Upsells + 1x Downsell</p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex items-center justify-center text-slate-600/50">
                        <ArrowRight className="w-8 h-8" />
                    </div>

                    {/* Phase 3 */}
                    <div className="flex-1 min-w-[300px] max-w-md w-full bg-slate-50 rounded-2xl p-8 border border-slate-200 relative shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-green-500/30">
                            Phase 03
                        </div>
                         <div className="mt-4 text-center">
                            <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-5">
                                <DollarSign className="w-7 h-7 text-green-600" />
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900">Pure Profit</h4>
                            <p className="text-sm text-slate-500 mt-2 mb-8">Backend High-Ticket Conversion</p>
                        </div>

                         <div className="bg-white border border-slate-100 rounded-xl p-5 mb-4 shadow-sm flex items-center gap-4 justify-center hover:border-green-200 transition-colors">
                            <p className="font-bold text-slate-800 text-sm">VSL / Booking Page</p>
                        </div>
                        
                        <div className="flex justify-center -my-2 relative z-10"><div className="h-6 w-px bg-slate-200"></div></div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="bg-green-500 rounded-xl p-4 flex flex-col items-center justify-center text-white shadow-lg shadow-green-500/20 transform hover:-translate-y-1 transition-transform">
                                <Phone className="w-5 h-5 mb-2" />
                                <p className="font-bold text-sm">Call</p>
                            </div>
                            <div className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col items-center justify-center text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                                <MessageSquare className="w-5 h-5 mb-2 text-slate-400" />
                                <p className="font-bold text-sm">Nurture</p>
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