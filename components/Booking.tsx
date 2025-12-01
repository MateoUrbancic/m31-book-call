import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const Booking: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] p-8 md:p-16 border border-white/10 overflow-hidden relative">
          
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-brand-500/10 rounded-full border border-brand-500/20 text-brand-400 font-mono text-xs font-bold mb-6">
                STEP 3 OF 3: THE STRATEGY SESSION
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Ready To Scale Your Agency?
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Book a 15-minute introductory call to see if our infrastructure is compatible with your business model. We only partner with 5 agencies per month to ensure results.
              </p>

              <div className="space-y-6">
                 {[
                   "Crystal clear roadmap to $100k/mo",
                   "Identify bottlenecks in your current funnel",
                   "See our live client results & backend systems"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                   </div>
                 ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="https://picsum.photos/100/100?random=50" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                    <img src="https://picsum.photos/100/100?random=51" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                    <img src="https://picsum.photos/100/100?random=52" className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Avatar" />
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-yellow-500 mb-0.5">
                      {'★★★★★'}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Rated 4.9/5 by 50+ Agencies</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 w-full bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[700px]">
              <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/mateo-m31/quick-call?&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;