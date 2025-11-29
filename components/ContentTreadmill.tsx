import React from 'react';

const ContentTreadmill: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        {/* Background gradient for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Are You Stuck On The <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Content Treadmill?</span>
            </h2>

            <div className="max-w-2xl mx-auto mb-16 space-y-4">
                <p className="text-xl text-slate-400">
                    20+ hours a week creating videos, writing posts, showing up in Stories.
                </p>
                <p className="text-xl text-white font-bold">
                    If you stop running, the whole machine stops.
                </p>
            </div>

            {/* The "Pain" Box */}
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-red-500/10 to-slate-900/50 border border-red-500/20 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden shadow-2xl shadow-red-900/10">
                
                <p className="text-lg md:text-xl text-slate-300 italic mb-10 leading-relaxed">
                    And you're thinking: <span className="text-white">"I should be able to run ads and scale this thing without relying on my time and energy. But every time I've tried, it either completely fails, or the numbers just don't make sense."</span>
                </p>

                <div className="border-l-4 border-red-500 pl-6 py-2 mb-10 bg-gradient-to-r from-red-500/5 to-transparent rounded-r-lg">
                    <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                        Maybe you've tested ads before and burned $3,000, $5,000, maybe even $10,000 with minimal results.
                    </p>
                </div>

                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                    You know your offer is solid... You know there's demand... You just don't have a system that converts cold strangers into customers profitably.
                </p>

            </div>

        </div>
    </section>
  );
};

export default ContentTreadmill;