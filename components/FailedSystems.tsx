import React from 'react';
import { UserX, PhoneOff, Magnet } from 'lucide-react';

const FailedSystems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            
            <div className="max-w-3xl w-full text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    "I Tried Ads... <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">It Just Didn't Work For Me"</span>
                </h2>
                
                <div className="w-full text-left space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    <p>
                        To escape the treadmill, you’ve probably tried to scale with paid traffic before. And if you are like most of our clients, <span className="text-white font-semibold">it wasn't great.
                    </p>

                    <p>
                        Maybe you hired an agency or tried to figure it out yourself, only to burn $5,000–$10,000 while barely breaking even.
                    </p>

                    <p>
                        You likely ran into one of these three walls:
                    </p>

                    <ul className="space-y-4 my-8 pl-2">
                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                                The "Freebie Seeker" Trap: You ran ads to a free Lead Magnet or PDF. You built an email list of thousands of people, but they just wanted free stuff. They never bought your high-ticket offer.
                        </li>

                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                            The "Webinar" Black Hole: You tried the classic webinar funnel. You paid for 500 registrants, but 70% didn't show up. You pitched to an empty room and barely broke even.
                        </li>

                        <li className="flex items-start gap-4">
                            <div className="mt-2.5 w-2 h-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                            The "Book-a-Call" Nightmare: You sent cold traffic straight to an application page, paid $200+ per booked call, but only 50% show up, and those that do can barely afford you...
                        </li>

                    </ul>


                    <p>
                        You ended up turning the ads off and retreating back to organic content.
                    </p>
                    
                    <p className="font-bold text-white text-2xl md:text-3xl">Here is the good news:</p>

                    <p>
                        Ads do work. The problem isn't your offer, your niche, or the ad platform.
                    </p>

                    <p>
                         The problem is this ever-increasing scepticism of the market.
                    </p>
                    <p>
                        This is WHY you might be experiencing:
                    </p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-left w-full max-w-6xl">
                {/* Item 1 */}
                <div className="bg-slate-900/30 p-8 rounded-2xl border border-white/5 hover:border-red-500/20 hover:bg-slate-900/80 transition-all group">
                    <div className="mb-6 text-red-400/70 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 origin-left">
                        <UserX className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-display">Ghosted Webinars</h4>
                    <p className="text-slate-400 leading-relaxed">
                        70% of registrants never show up because they don't value your time yet.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="bg-slate-900/30 p-8 rounded-2xl border border-white/5 hover:border-red-500/20 hover:bg-slate-900/80 transition-all group">
                    <div className="mb-6 text-red-400/70 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 origin-left">
                        <PhoneOff className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-display">Costly Sales Calls</h4>
                    <p className="text-slate-400 leading-relaxed">
                        $200+ per booking, and half of them don't even show up.
                    </p>
                </div>

                {/* Item 3 */}
                <div className="bg-slate-900/30 p-8 rounded-2xl border border-white/5 hover:border-red-500/20 hover:bg-slate-900/80 transition-all group">
                    <div className="mb-6 text-red-400/70 group-hover:text-red-500 group-hover:scale-110 transition-all duration-300 origin-left">
                        <Magnet className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 font-display">Failed Freebies</h4>
                    <p className="text-slate-400 leading-relaxed">
                        Free lead magnets attract "freebie seekers," not serious buyers.
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
};

export default FailedSystems;