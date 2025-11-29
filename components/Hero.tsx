import React from 'react';
import { Play, Volume2, TrendingUp, Rocket, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 contrast-150"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up hover:border-brand-500/50 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">For Established Coaches, Communities & Course Sellers</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-white">
          Scale Your Agency To <br />
          <span className="bg-gradient-to-r from-brand-300 via-brand-500 to-accent-500 bg-clip-text text-transparent">
            $100k/Month
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
          We build automated client acquisition infrastructures for B2B agencies. 
          Stop relying on referrals. Start predicting revenue.
        </p>

        {/* VSL Container */}
        <div className="relative w-full max-w-4xl group perspective-1000 mb-20">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-slate-950 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
            
            {/* Fake UI Header */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 pointer-events-none">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Marketing 31 Protocol</div>
            </div>

            {/* Placeholder for Video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-slate-800/80 transition-colors cursor-pointer bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center">
               <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
               
               <div className="relative z-10 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300 shadow-xl shadow-black/20">
                  <Play className="w-8 h-8 text-white ml-1 fill-white" />
               </div>
               <p className="relative z-10 mt-8 text-sm font-semibold text-white uppercase tracking-[0.2em] animate-pulse">Watch The Breakdown</p>
            </div>
            
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-bold text-white bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Volume2 className="w-3 h-3" />
                <span>TAP TO UNMUTE</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 w-full">
           <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
             Book Your Growth Audit
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full animate-ping"></span>
           </button>
           
           {/* Testimonials / Trusted By Section */}
           <div className="mt-16 w-full max-w-6xl">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mb-8 text-center">Trusted by Industry Leaders</p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                  
                  {/* Card 1 */}
                  <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors group">
                      <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                              <span className="font-bold text-white text-lg">OK</span>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-lg leading-none mb-1">Oleksiy Kononov</h4>
                              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide font-bold">#1 Handstand Coach in the World</p>
                          </div>
                      </div>
                      <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
                          "Mateo helped me with email marketing for my club and truly understands the craft. He boosted my sales. I really enjoy working with him!"
                      </p>
                      <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/5 px-3 py-2 rounded-lg border border-green-400/10">
                          <TrendingUp className="w-4 h-4" />
                          <span>We Generated $96k In Profit</span>
                      </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors group">
                      <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
                              <span className="font-bold text-white text-lg">LM</span>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-lg leading-none mb-1">Lisa Mojsin</h4>
                              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide font-bold">English Teacher (2M Subscribers)</p>
                          </div>
                      </div>
                      <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
                          "I am happy with the sales funnel you created. You are skilled and creative. I am happy to write a letter of recommendation attesting to that."
                      </p>
                      <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/5 px-3 py-2 rounded-lg border border-green-400/10">
                          <Rocket className="w-4 h-4" />
                          <span>Built Low-Ticket System for Organic Audience</span>
                      </div>
                  </div>

                  {/* Card 3 */}
                   <div className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 transition-colors group">
                      <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                              <span className="font-bold text-white text-lg">DC</span>
                          </div>
                          <div>
                              <h4 className="font-bold text-white text-lg leading-none mb-1">David Chen</h4>
                              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide font-bold">Founder, ScaleSaaS</p>
                          </div>
                      </div>
                      <p className="text-slate-300 italic text-sm leading-relaxed mb-6">
                          "We needed a predictable system to scale our B2B outreach. Marketing 31 delivered exactly that. No fluff, just results."
                      </p>
                      <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/5 px-3 py-2 rounded-lg border border-green-400/10">
                          <BarChart3 className="w-4 h-4" />
                          <span>Generated $45k in First Month</span>
                      </div>
                  </div>

              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;