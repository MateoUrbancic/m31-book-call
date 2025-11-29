import React from 'react';
import { TrendingDown, Users, Clock, AlertCircle } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Why Most Agencies Hit A <br />
            <span className="text-red-500">Revenue Ceiling</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            You are excellent at delivery, but your client acquisition engine is broken. 
            Does this sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative group hover:bg-slate-900 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The "Rollercoaster" Revenue</h3>
            <p className="text-slate-400 leading-relaxed">
              One month you're feasting, the next you're famine. You rely on referrals and word-of-mouth, meaning you have zero control over your pipeline. You can't forecast growth because you can't predict your next lead.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative group hover:bg-slate-900 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The "Founder" Bottleneck</h3>
            <p className="text-slate-400 leading-relaxed">
              You are the businesses' best salesperson. If you aren't sending emails or taking calls, the business stops growing. You've bought yourself a high-paying job, not built a scalable asset.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative group hover:bg-slate-900 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">The Ad Waste Pit</h3>
            <p className="text-slate-400 leading-relaxed">
              You tried running ads. You spent thousands on Facebook or LinkedIn, got a handful of unqualified leads who couldn't afford your retainer, and turned them off. You think "ads don't work for my niche."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;