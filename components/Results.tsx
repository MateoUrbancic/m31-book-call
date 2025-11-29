import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="max-w-3xl">
            <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">Proven Performance</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Results Over Everything.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl">
              We don't hide behind vanity metrics. We measure our success by the revenue we add to your bank account.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
             <div className="text-5xl font-display font-bold text-white">$12M+</div>
             <div className="text-slate-500 text-sm uppercase tracking-widest">Client Revenue Generated</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">S</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-brand-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">$145k/mo</h3>
                    <p className="text-slate-400 font-mono text-sm">Added Annual Recurring Revenue</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "We were stuck at $30k/mo for 2 years. Marketing 31 revamped our entire offer and outreach system. We hit $100k/mo in 5 months."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Sam K.</span>
                            <span className="block text-slate-500">Founder, Scale Labs</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">A</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-accent-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">38 Calls</h3>
                    <p className="text-slate-400 font-mono text-sm">Qualified Booked Appointments / Month</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "Our calendar was empty. Now we have to hire a second closer just to handle the volume. The quality of leads is insane."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Alex R.</span>
                            <span className="block text-slate-500">CEO, Apex Creative</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group relative bg-gradient-to-b from-white/10 to-white/5 p-[1px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-slate-950 h-full rounded-2xl p-8 relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-black text-xl">V</div>
                    <ArrowUpRight className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                 </div>
                 <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">6.5x ROI</h3>
                    <p className="text-slate-400 font-mono text-sm">Return on Ad Spend (ROAS)</p>
                 </div>
                 <div className="pt-8 border-t border-white/5">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        "We tried ads before and burned cash. Marketing 31's funnel converted cold traffic profitably from day 1."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                        <div className="text-xs">
                            <span className="block text-white font-bold">Victor M.</span>
                            <span className="block text-slate-500">Director, Vision Media</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Results;