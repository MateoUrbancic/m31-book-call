import React from 'react';
import { User, DollarSign, XCircle } from 'lucide-react';

const TrustGap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-900/50 rounded-[100%] blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              The Invisible Trust Gap
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light">
              Why standard high-ticket funnels fail miserably with cold traffic.
            </p>
          </div>
        </div>

        {/* The Gap Visualization */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch max-w-5xl mx-auto relative">
          
          {/* Connector Visual (Desktop only) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center relative shadow-xl">
               <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-red-500/50 to-transparent rotate-90"></div>
               <XCircle className="w-6 h-6 text-red-500 bg-slate-950 relative z-10" />
            </div>
          </div>

          {/* Left Card: The Stranger */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-blue-500/20 shadow-2xl relative z-10 flex flex-col h-full group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>
            
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <User className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">The Stranger</h3>
            </div>
            
            <div className="space-y-4 mb-8 flex-1">
                {['"Who is this person?"', '"Is this a scam?"', '"I don\'t trust you yet."'].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        <span className="italic">{text}</span>
                    </div>
                ))}
            </div>

            <div className="bg-blue-950/30 border border-blue-500/30 rounded-xl p-4">
                <p className="text-sm font-bold text-blue-300">
                    <span className="opacity-60 font-normal text-slate-300 mr-2 uppercase text-xs tracking-wider">Status:</span> 
                    Skeptical & Cold.
                </p>
                <p className="text-xs text-blue-200/60 mt-1">Needs time & proof before buying.</p>
            </div>
          </div>

          {/* Right Card: The Big Ask */}
          <div className="bg-gradient-to-bl from-slate-900 to-slate-950 rounded-3xl p-8 border border-red-500/20 shadow-2xl relative z-10 flex flex-col h-full">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-red-500 to-transparent opacity-50"></div>

            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-400 border border-red-500/20">
                    <DollarSign className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">The Big Ask</h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light flex-1">
                Trying to sell a <span className="text-white font-bold bg-white/5 px-1 rounded">$2k - $10k</span> offer immediately. <br/><br/>
                <span className="italic opacity-80">"This is like asking for marriage on the first date."</span>
            </p>

            <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-4 flex justify-between items-center group cursor-default">
                <div>
                    <p className="text-sm font-bold text-red-400">
                        <span className="opacity-60 font-normal text-slate-300 mr-2 uppercase text-xs tracking-wider">Result:</span> 
                        They run away.
                    </p>
                </div>
                <XCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustGap;