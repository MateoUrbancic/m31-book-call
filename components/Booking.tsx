import React from 'react';
import { Calendar, Check, Clock, ArrowRight } from 'lucide-react';

const Booking: React.FC = () => {
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

            <div className="relative z-10 bg-white rounded-2xl h-[600px] w-full shadow-2xl overflow-hidden flex flex-col">
              {/* Mock Calendar Header */}
              <div className="p-6 border-b flex items-center justify-between bg-white">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">M</div>
                    <div>
                       <h4 className="font-bold text-slate-900">Marketing 31 Team</h4>
                       <p className="text-xs text-slate-500">Growth Consultation</p>
                    </div>
                 </div>
                 <div className="text-slate-400">
                    <Clock className="w-5 h-5" />
                 </div>
              </div>
              
              {/* Mock Calendar Body */}
              <div className="flex-1 p-6 md:p-8 bg-slate-50">
                 <h3 className="text-xl font-bold text-slate-900 mb-6">Select a Date & Time</h3>
                 
                 {/* Calendar Grid Simulation */}
                 <div className="bg-white p-4 rounded-xl border shadow-sm mb-6">
                    <div className="flex justify-between items-center mb-4">
                       <span className="font-bold text-slate-800">October 2024</span>
                       <div className="flex gap-2">
                          <button className="p-1 hover:bg-slate-100 rounded">&lt;</button>
                          <button className="p-1 hover:bg-slate-100 rounded">&gt;</button>
                       </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center">
                        <span className="text-xs text-slate-400 py-2">S</span>
                        <span className="text-xs text-slate-400 py-2">M</span>
                        <span className="text-xs text-slate-400 py-2">T</span>
                        <span className="text-xs text-slate-400 py-2">W</span>
                        <span className="text-xs text-slate-400 py-2">T</span>
                        <span className="text-xs text-slate-400 py-2">F</span>
                        <span className="text-xs text-slate-400 py-2">S</span>
                        
                        {/* Days */}
                        {Array.from({length: 31}).map((_, i) => {
                           const isAvailable = i > 12 && i < 28 && i % 7 !== 0 && i % 7 !== 6;
                           const isSelected = i === 15;
                           return (
                             <div 
                               key={i} 
                               className={`
                                 aspect-square flex items-center justify-center rounded-full text-sm
                                 ${isSelected ? 'bg-slate-900 text-white font-bold' : ''}
                                 ${isAvailable && !isSelected ? 'text-slate-700 hover:bg-slate-100 cursor-pointer font-medium bg-slate-50' : ''}
                                 ${!isAvailable ? 'text-slate-300' : ''}
                               `}
                             >
                               {i+1}
                             </div>
                           )
                        })}
                    </div>
                 </div>

                 {/* Time Slots */}
                 <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 border border-slate-900 bg-slate-900 text-white rounded-lg font-medium text-sm transition-all hover:opacity-90">09:00 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">09:30 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">10:00 AM</button>
                    <button className="py-3 border border-slate-200 text-slate-600 rounded-lg font-medium text-sm hover:border-slate-900 hover:text-slate-900 transition-all">11:30 AM</button>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;