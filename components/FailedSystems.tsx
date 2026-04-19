import React from 'react';
import { UserX, PhoneOff, Magnet } from 'lucide-react';

const FailedSystems: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
            
            <div className="max-w-3xl w-full text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
                    Why a $10 Product?
                </h2>
                
                <div className="w-full text-left space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                    <p>
                        Most systems out there are flawed.
                    </p>

                    <p>
                        With webinars, you're one bad slide away or one bad pitch away from getting 0 in return from your ad spend and weeks of work.
                    </p>

                    <p>
                        With a book-a-call system, your costs are through the roof and you entirely rely on your sales team to turn a profit.
                    </p>

                    <p>
                        ...and you don't even do that until 2–3 weeks later.
                    </p>

                    <div className="space-y-2 font-semibold text-white pl-4 border-l-2 border-red-500/50">
                        <p>Too much stress.</p>
                        <p>Too much risk.</p>
                        <p>Too much money spent without a guaranteed ROI.</p>
                    </div>

                    <p className="font-bold text-white text-2xl md:text-3xl mt-12 mb-6">Selling a $10 product on the front-end fixes this.</p>

                    <p>
                        Selling a $10 product allows you to attract your ideal clients while also immediately break even on your ad spend the same day.
                    </p>

                    <p className="font-bold text-red-500">
                        Here's exactly how it works.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default FailedSystems;