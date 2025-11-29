import React from 'react';
import { UserX, PhoneOff, Magnet } from 'lucide-react';

const FailedSystems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            
            <div className="max-w-3xl w-full text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    Systems You Might've <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Tried Before...</span>
                </h2>
                
                <div className="w-full text-left space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    <p>
                        Maybe you spent <span className="text-white font-semibold">$5,000 to $10,000</span> on Facebook ads, only to get zero ROI.
                    </p>
                    <p>
                        Maybe you built a <span className="text-white font-semibold">Webinar Funnel</span>, only to realize that 70% of people don't show up, and the ones who do never buy.
                    </p>
                    <p>
                        Maybe you tried the <span className="text-white font-semibold">"Book a Call" Funnel</span>, and your sales team got buried in an avalanche of unqualified "tire-kickers" who couldn't afford your services.
                    </p>
                    <p>
                        You ended up turning the ads off, retreating back to organic content, and blaming the algorithm.
                    </p>
                    
                    <div className="py-4">
                        <p className="font-bold text-white text-2xl md:text-3xl">But here is the truth:</p>
                    </div>

                    <p>
                        The problem isn't your offer. The problem isn't your niche. And the problem isn't that "ads don't work anymore."
                    </p>
                    <p>
                         The problem is <span className="text-red-400 font-bold">using the wrong system to convert</span> this increasingly sceptical market of 2026.
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
                        $200+ per booking, and half of them don't even pick up the phone.
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