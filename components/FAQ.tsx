import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How is this different from a typical lead gen agency?",
    answer: "Most lead gen agencies just send you cold leads or book appointments on your calendar without qualifying them. We build the entire infrastructure INSIDE your business. This means we set up the domains, the scraping tech, the scripts, and the automations so you own the asset forever."
  },
  {
    question: "Do you offer a guarantee?",
    answer: "Yes. If we don't add at least $15k/mo to your pipeline within the first 90 days, we work for free until we do. We are incentivized to get you results as fast as possible."
  },
  {
    question: "How much time does this require from me?",
    answer: "In the first 2 weeks (Onboarding), we need about 2-3 hours of your time to extract your offer and case studies. Once the system is live, you only need to focus on taking the sales calls we generate."
  },
  {
    question: "How fast can I expect results?",
    answer: "Our average client sees their first booked appointment within 14 days of launch. The infrastructure takes about 10 days to build, warm up, and deploy."
  },
  {
    question: "Does this work for [My Specific Niche]?",
    answer: "Our protocol works for any high-ticket B2B service. If your average client value (LTV) is above $3,000, this system will work. It does NOT work for low-ticket B2C products."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-mono text-sm tracking-wider uppercase mb-4 block">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-slate-900/50 border-brand-500/50 shadow-[0_0_30px_-10px_rgba(14,165,233,0.15)]' 
                  : 'bg-transparent border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    openIndex === index 
                        ? 'bg-brand-500 border-brand-500 rotate-180' 
                        : 'border-white/20 text-white'
                }`}>
                    {openIndex === index ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;