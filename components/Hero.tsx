import React, { useState } from 'react';
import { Play, Volume2, TrendingUp, Users, DollarSign, Hexagon, Triangle, Command, Slack, Layers, Framer, ArrowRight, X, CheckCircle2 } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    name: "Spencer Pawliw",
    title: "#1 COMMUNITY ON SKOOL, EVOLVE",
    initials: "SP",
    color: "from-orange-500 to-red-600",
    shadow: "shadow-orange-500/20",
    textColor: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    quote: '"Just want to say you\'ve done a fire ass job. Like the value your providing is crazy. You\'re a killer dude."',
    highlight: "Converting Cold Traffic Into Origins & Evolve Members @ 3.5X ROAS",
    icon: TrendingUp,
    problem: "Spencer had an extremely successful organic channel but struggled to convert cold traffic profitably into his Skool communities without cannibalizing his existing audience.",
    solution: "We implemented a low-ticket book-call system using Meta Ads. This allowed us to liquidate ad spend immediately through a frontend product, while funneling the most qualified buyers into sales calls for his high-ticket Evolve community.",
    results: [
      "Consistent 3.5X ROAS on cold traffic",
      "Predictable, fully automated customer acquisition system",
      "High-quality booked calls without relying on organic reach"
    ]
  },
  {
    id: 2,
    name: "Oleksiy Kononov",
    title: "#1 Handstand Coach in the World",
    initials: "OK",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    textColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    quote: '"Mateo helped me with email marketing for my club and truly understands the craft. He boosted my sales. I really enjoy working with him!"',
    highlight: "We Generated $96k In Profit",
    icon: TrendingUp,
    problem: "Oleksiy relied heavily on manual outreach and lacked a systematic backend to monetize his massive following. He needed a way to nurture leads and convert them into his programs without spending hours in the DMs.",
    solution: "We built an automated backend infrastructure and a high-converting email architecture that nurtured leads on autopilot. We then tied this into a low-ticket frontend offer to filter for serious buyers.",
    results: [
      "Generated $96,000 in pure profit",
      "Created a totally hands-off sales mechanism",
      "Re-engaged thousands of dead leads through automated email flows"
    ]
  },
  {
    id: 3,
    name: "Lisa Mojsin",
    title: "English Teacher (2M Subscribers)",
    initials: "LM",
    color: "from-pink-500 to-purple-600",
    shadow: "shadow-pink-500/20",
    textColor: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/20",
    quote: '"I am happy with the sales funnel you created. You are skilled and creative. I am happy to write a letter of recommendation attesting to that."',
    highlight: "Built Low-Ticket System for Organic Audience",
    icon: Play,
    problem: "Despite having over 2 million YouTube subscribers, Lisa was struggling to effectively monetize her massive audience programmatically. She needed a structured funnel to transition viewers from free content to paid products.",
    solution: "We engineered a bespoke low-ticket sales funnel tailored to her educational niche. By creating a compelling entry offer, we were able to seamlessly convert her organic traffic into a list of proven buyers.",
    results: [
      "Successfully monetized a largely untapped organic audience",
      "Built a scalable backend for future high-ticket up-sells",
      "Increased overall customer lifetime value significantly"
    ]
  }
];

const Hero: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<(typeof caseStudies)[0] | null>(null);

  return (
    <section className="relative pt-6 pb-20 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5 mt-16 md:mt-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 contrast-150"></div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-4 md:mb-8 animate-fade-in-up hover:border-brand-500/50 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest leading-normal">FOR ESTABLISHED COACHES & B2B SERVICE PROVIDERS</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[81px] font-display font-bold leading-[1.2] mb-[15px] tracking-tighter text-white !w-full !max-w-full lg:!max-w-[1050px] !h-auto lg:!h-[323px] mx-auto overflow-hidden sm:overflow-visible relative shrink-0">
            We'll Sell a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 block sm:inline-block w-full sm:w-auto break-words whitespace-normal" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>$10 Product</span> For Your Business Via <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 block sm:inline-block w-full sm:w-auto break-words whitespace-normal" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Meta Ads</span> & Book You
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 block sm:inline-block w-full sm:w-auto break-words whitespace-normal" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}> 1-5 Calls Each Day With Your Ideal Clients</span>
        </h1>

        <p className="text-lg md:text-[24px] text-slate-400 !w-full !max-w-full lg:!max-w-[1111px] mb-[47px] leading-relaxed font-light text-center mx-auto px-4">
          We guarantee an ROI, <strong className="text-white">or we'll give you a full refund.</strong>
        </p>

        {/* VSL Container */}
        <div className="relative w-full max-w-4xl group perspective-1000 mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video bg-slate-950 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
            <iframe 
                src="https://player.vimeo.com/video/1141632169?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0" 
                className="absolute inset-0 w-full h-full" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                title="Marketing 31 Protocol"
            ></iframe>
          </div>
        </div>

          {/* CTA Section */}
        <div className="flex flex-col items-center gap-6 w-full">
           <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center">
             Talk to Us - Book Your Free Strategy Call
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-500 rounded-full animate-ping"></span>
           </button>
           
           {/* Logo Marquee */}
           <div className="w-full mt-12 overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex animate-marquee items-center shrink-0 gap-16 pr-16 text-white/30">
                 {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex shrink-0 items-center gap-16">
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Hexagon className="w-8 h-8" />
                           <span>Evolve</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Framer className="w-8 h-8" />
                           <span>Spencer P.</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Command className="w-8 h-8" />
                           <span>Origins</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Layers className="w-8 h-8" />
                           <span>Oleksiy K.</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Slack className="w-8 h-8" />
                           <span>Marketing 31</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Triangle className="w-8 h-8" />
                           <span>Lisa M.</span>
                        </div>
                    </div>
                 ))}
              </div>
              <div aria-hidden="true" className="flex animate-marquee items-center shrink-0 gap-16 pr-16 text-white/30">
                 {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex shrink-0 items-center gap-16">
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Hexagon className="w-8 h-8" />
                           <span>Evolve</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Framer className="w-8 h-8" />
                           <span>Spencer P.</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Command className="w-8 h-8" />
                           <span>Origins</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Layers className="w-8 h-8" />
                           <span>Oleksiy K.</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Slack className="w-8 h-8" />
                           <span>Marketing 31</span>
                        </div>
                        <div className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-widest grayscale hover:grayscale-0 hover:text-white/80 transition-all cursor-default">
                           <Triangle className="w-8 h-8" />
                           <span>Lisa M.</span>
                        </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Social Proof Strip */}
           <div className="mt-16 w-full max-w-6xl">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mb-8 text-center">Trusted by Industry Leaders</p>
              
               <div className="grid md:grid-cols-3 gap-6 text-left">
                  {caseStudies.map((study) => (
                    <div 
                      key={study.id}
                      onClick={() => setActiveCaseStudy(study)}
                      className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-slate-900/80 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${study.color} flex items-center justify-center shrink-0 shadow-lg ${study.shadow}`}>
                                <span className="font-bold text-white text-lg">{study.initials}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg leading-none mb-1">{study.name}</h4>
                                <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wide font-bold">{study.title}</p>
                            </div>
                        </div>
                        <p className="text-slate-300 italic text-sm leading-relaxed mb-6 flex-grow">
                            {study.quote}
                        </p>
                        <div className={`flex items-center gap-2 ${study.textColor} text-sm font-bold ${study.bgColor} px-3 py-2 rounded-lg border ${study.borderColor} mb-4`}>
                            <study.icon className="w-4 h-4 shrink-0" />
                            <span>{study.highlight}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                            Read Case Study <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md">
          <div 
             className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl animate-fade-in-up"
             onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b border-white/5 bg-gradient-to-br ${activeCaseStudy.bgColor} to-transparent`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${activeCaseStudy.color} flex items-center justify-center shrink-0 shadow-lg ${activeCaseStudy.shadow}`}>
                            <span className="font-bold text-white text-xl">{activeCaseStudy.initials}</span>
                        </div>
                        <div>
                            <h3 className="font-display font-bold text-2xl text-white mb-1">{activeCaseStudy.name}</h3>
                            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-bold">{activeCaseStudy.title}</p>
                        </div>
                    </div>
                    <button 
                       onClick={() => setActiveCaseStudy(null)}
                       className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8">
                
                {/* The Challenge */}
                <div>
                   <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">The Challenge</h4>
                   <p className="text-slate-300 leading-relaxed text-lg font-light">
                      {activeCaseStudy.problem}
                   </p>
                </div>

                {/* The Solution */}
                <div>
                   <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">The Solution</h4>
                   <div className="p-5 rounded-xl border border-white/5 bg-slate-800/50">
                     <p className="text-slate-300 leading-relaxed text-lg font-light">
                        {activeCaseStudy.solution}
                     </p>
                   </div>
                </div>

                {/* The Results */}
                <div>
                   <h4 className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-4">The Results</h4>
                   <div className="space-y-3">
                      {activeCaseStudy.results.map((result, idx) => (
                         <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-6 h-6 ${activeCaseStudy.textColor} shrink-0`} />
                            <span className="text-slate-200 text-lg">{result}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Call to Action Inside Modal */}
                <div className="pt-6 border-t border-white/5 flex justify-end">
                    <button 
                        onClick={() => {
                            setActiveCaseStudy(null);
                            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`px-6 py-3 rounded-full font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 bg-gradient-to-r ${activeCaseStudy.color}`}
                    >
                        Build This For Me
                    </button>
                </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;