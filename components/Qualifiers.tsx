import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Qualifiers: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Who Is This For?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our infrastructure is not for everyone. We are strictly a B2B growth partner. 
            Please review the criteria below before booking a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Green Column - Who It Is For */}
          <div className="p-8 rounded-3xl bg-green-500/5 border border-green-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 className="w-32 h-32 text-green-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-500/20" />
                Who We Help
             </h3>
             <ul className="space-y-4">
                {[
                    "Marketing Agencies (SEO, PPC, Social, Email)",
                    "B2B Consulting Firms & SaaS Companies",
                    "Businesses doing at least $15k/mo in revenue",
                    "Founders with at least one proven case study",
                    "Teams ready to handle 20+ additional sales calls/mo"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>

          {/* Red Column - Who It Is NOT For */}
          <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <XCircle className="w-32 h-32 text-red-500" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-red-500 fill-red-500/20" />
                Who We DO NOT Help
             </h3>
             <ul className="space-y-4">
                {[
                    "E-commerce / D2C Brands",
                    "Complete beginners with $0 revenue",
                    "Drop-shipping or 'Get Rich Quick' schemes",
                    "Agencies with major client churn issues",
                    "People looking for a 'magic pill' without work"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualifiers;