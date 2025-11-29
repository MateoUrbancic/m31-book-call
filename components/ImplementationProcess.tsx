import React from 'react';
import { Check } from 'lucide-react';

const ImplementationProcess: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Our 3-Step Implementation Process
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] md:left-[27px] top-8 bottom-8 w-0.5 bg-slate-800" />

          {/* Step 1 */}
          <div className="relative mb-12 pl-20 md:pl-24">
            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="text-blue-500 font-bold text-xl">1</span>
            </div>
            
            <div className="bg-slate-900/50 border border-blue-500/20 rounded-3xl p-8 hover:bg-slate-900/80 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Strategic Foundation (Week 1)</h3>
              <p className="text-slate-400 leading-relaxed">
                We start by analyzing your current business, offers, and audience. We identify the optimal low-ticket offer that will resonate with cold traffic while naturally leading customers toward your high-ticket programs. We map out your complete customer acquisition funnel and establish the metrics for success.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-12 pl-20 md:pl-24">
            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <span className="text-purple-500 font-bold text-xl">2</span>
            </div>
            
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-3xl p-8 hover:bg-slate-900/80 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Minimum Viable Funnel + Ad Creatives (Week 2-3)</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Here's where we diverge from traditional approaches. Instead of spending weeks building out a complex system that might not work, we build a <span className="text-white font-bold">Minimum Viable Funnel</span> along with basic ad creatives.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "A streamlined sales page that effectively communicates the offer",
                  "Essential delivery automations to fulfill the product",
                  "Basic static image ads that directly state the offer and value proposition"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 italic">
                This approach allows us to quickly test the offer with real cold traffic and validate whether it converts—without wasting weeks.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-20 md:pl-24">
            <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-slate-950 border-2 border-green-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <span className="text-green-500 font-bold text-xl">3</span>
            </div>
            
            <div className="bg-slate-900/50 border border-green-500/20 rounded-3xl p-8 hover:bg-slate-900/80 transition-all">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Launch, Optimization & Full Build-Out (Week 4+)</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Once we launch the Minimum Viable Funnel and get real data from cold traffic, we enter the optimization phase.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Green Box */}
                <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-green-400 mb-2 text-sm uppercase tracking-wide">If we get offer validation:</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We build out the complete system (Order bumps, upsells, long-form sales pages, video ads, email sequences).
                  </p>
                </div>

                {/* Yellow Box */}
                <div className="bg-yellow-950/20 border border-yellow-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-yellow-500 mb-2 text-sm uppercase tracking-wide">If the offer needs adjustment:</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We quickly pivot to test new angles, pricing, or positioning—because we didn't waste weeks building out a complete system first.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;