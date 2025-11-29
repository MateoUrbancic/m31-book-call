import React from 'react';
import { UserX, PhoneOff, Magnet } from 'lucide-react';

const FailedSystems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            
            <div className="max-w-3xl w-full text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    Systems You Might've <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Tried Before...</span>
                </h2>
                
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    You've likely tried to bridge the trust gap with brute force, relying on methods that demand high trust before you've earned it. Does this look familiar?
                </p>
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