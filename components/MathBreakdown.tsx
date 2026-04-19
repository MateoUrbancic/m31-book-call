import React from 'react';

const ExactFunnels: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Here Are The Exact Funnels & Ads We've Built
          </h2>
          <p className="text-lg text-slate-400">
            Scroll through these live examples. This is the exact architecture we use to generate daily sales and booked calls consistently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {/* Funnel Box 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-brand-500/30 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">High-Converting Static Ads</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Designed to grab attention immediately. Built with high-contrast copy, social proof, and irresistible hooks.
                </p>
                <div className="bg-slate-950 rounded-lg relative overflow-hidden border border-slate-800 flex flex-col h-[400px]">
                    {/* Browser top bar */}
                    <div className="w-full bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-slate-800 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        <div className="ml-2 flex-1 bg-slate-950 rounded text-[10px] text-slate-500 px-2 py-0.5 max-w-[150px] truncate">
                            facebook-ads-library.html
                        </div>
                    </div>
                    {/* Scrollable image container */}
                    <div className="w-full flex-1 overflow-y-auto bg-slate-950">
                         {/* Replace this src with your own uploaded image URL */}
                        <img 
                          src="/Easy-A-Media-13-Winning-Static-Ads-04-19-2026_10_41_AM.png" 
                          alt="Winning Static Ads Preview"
                          className="w-full h-auto object-top"
                          referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>

            {/* Funnel Box 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-brand-500/30 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Escend Media Funnel</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    A smooth landing page experience tailored for e-commerce brands looking to scale with email marketing.
                </p>
                <div className="bg-slate-950 rounded-lg relative overflow-hidden border border-slate-800 flex flex-col h-[400px]">
                    {/* Browser top bar */}
                    <div className="w-full bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-slate-800 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        <div className="ml-2 flex-1 bg-slate-950 rounded text-[10px] text-slate-500 px-2 py-0.5 max-w-[150px] truncate">
                            escend-media.html
                        </div>
                    </div>
                    {/* Scrollable image container */}
                    <div className="w-full flex-1 overflow-y-auto bg-slate-950">
                        {/* Replace this src with your own uploaded image URL */}
                        <img 
                          src="/Email-Marketing-Agency-for-E-Commerce-Brands-Escend-Media-04-19-2026_10_41_AM.png" 
                          alt="Email Marketing Agency Funnel Preview"
                          className="w-full h-auto object-top"
                          referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>

            {/* Funnel Box 3 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-brand-500/30 flex flex-col">
                 <h3 className="text-xl font-bold text-white mb-2">Marketing 31 Funnel Page</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    The backend sequence capturing highly qualified leads effectively, seamlessly driving booked calls and daily sales.
                </p>
                <div className="bg-slate-950 rounded-lg relative overflow-hidden border border-slate-800 flex flex-col h-[400px]">
                    {/* Browser top bar */}
                    <div className="w-full bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-slate-800 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        <div className="ml-2 flex-1 bg-slate-950 rounded text-[10px] text-slate-500 px-2 py-0.5 max-w-[150px] truncate">
                            marketing-31.html
                        </div>
                    </div>
                    {/* Scrollable image container */}
                    <div className="w-full flex-1 overflow-y-auto bg-slate-950">
                        {/* Replace this src with your own uploaded image URL */}
                        <img 
                          src="/Marketing31-04-19-2026_10_42_AM.png" 
                          alt="Marketing31 Funnel Preview"
                          className="w-full h-auto object-top"
                          referrerPolicy="no-referrer"
                        />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ExactFunnels;