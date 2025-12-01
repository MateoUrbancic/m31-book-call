import React from 'react';

const ContentTreadmill: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
        {/* Background gradient for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            
            {/* Unified container for consistent width alignment */}
            <div className="max-w-3xl w-full">
                  
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    Are You Stuck On The
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Content Treadmill?</span>
                </h2>

                <div className="w-full text-left space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    
                    <p>
                        You’ve already built a successful business. You have a proven offer, happy clients, and you’re likely generating <span className="text-white font-semibold">$50k+/month in revenue.</span> 
                    </p>

                    <p>
                        But you have a problem:
                    </p>

                    <p>
                        <span className="text-white font-semibold border-b border-red-500/50">Your entire business is 100% dependent on YOU showing up every single day.</span>
                    </p>

                    <p>
                        You built your revenue on the back of organic content—YouTube videos, Instagram stories, and constant value posts. And now, you are trapped in a cycle where you have to feed the content machine just to maintain your current revenue.
                    </p>

                    <p className="text-white font-bold text-xl">
                        Does this sound like you?
                    </p>

                    <ul className="space-y-4 my-8 pl-2">
                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                            <span>You’re working 20+ hours a week just creating content, filming videos, and writing posts.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                            <span>You’re terrified to stop because you know if you stop posting for a week, your pipeline dries up and revenue drops to zero.</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                            <span>You feel like you have a high-paying job, not a business. You feel like you've built a business that only moves when you're on the content treadmill.</span>
                        </li>
                    </ul>

                    <p>
                        If that's you...
                    </p>

                    <p className="text-white font-bold text-xl">
                        In the next 60 seconds I'll show you exactly how you can start getting new customer and clients from paid ads with almost 0 direct time and energy input from yourself.
                    </p>

                </div>
            </div>
        </div>
    </section>
  );
};

export default ContentTreadmill;