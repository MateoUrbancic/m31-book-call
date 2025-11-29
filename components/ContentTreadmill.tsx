import React from 'react';

const ContentTreadmill: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        {/* Background gradient for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            
            {/* Unified container for consistent width alignment */}
            <div className="max-w-3xl w-full">
                
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    Are You Stuck On The <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Content Treadmill?</span>
                </h2>

                <div className="w-full text-left space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    
                    <p>
                        If you are generating <span className="text-white font-semibold">$50k-$150k/month organically</span> but feel "trapped" on the content treadmill—and every attempt to scale with paid ads has resulted in burning cash—<span className="text-white font-semibold border-b border-red-500/50">this is the most important letter you will read today.</span>
                    </p>

                    <p>
                        You have a proven offer. You have changed lives. You have hit a revenue ceiling that relies 100% on your personal energy.
                    </p>

                    <p>
                        You know the solution is Paid Ads. You know you need a system that brings in clients while you sleep.
                    </p>

                    <div className="relative w-full pt-4">
                         <div className="absolute inset-0 bg-red-500/10 blur-2xl -z-10"></div>
                         <p className="text-white font-bold text-xl md:text-2xl">
                            But if you are like most established experts, your experience with paid traffic has been a nightmare.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};

export default ContentTreadmill;