import React from 'react';
import { ArrowDownRight, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden selection:bg-amber-500/30">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none animate-blob" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-[1400px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Main Text Content */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          <ScrollReveal delay={0.1}>
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-zinc-300 uppercase tracking-widest backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Verfügbar in Dortmund & Umgebung
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.95] mb-8">
              <span className="text-gradient">Energie</span> <br />
              <span className="text-zinc-700 font-medium italic pr-4">neu</span>
              <span className="relative inline-block">
                 definiert.
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                 </svg>
              </span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed mb-10 border-l-2 border-zinc-800 pl-6">
              Ihr Fachpartner <strong className="text-white">Mike Lamers</strong> für Premium Photovoltaik-Systeme. 
              Wir verwandeln Ihr Dach in ein unabhängiges Kraftwerk. Effizient, ästhetisch und zukunftssicher.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5} className="flex flex-wrap gap-4">
            <a href="#services" className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
               <span className="relative flex items-center gap-2">
                  Lösungen entdecken <ArrowDownRight size={16} />
               </span>
            </a>
            <a href="#contact" className="group px-8 py-4 bg-transparent border border-zinc-800 text-white rounded-full font-bold text-sm tracking-wide hover:bg-zinc-900 transition-colors">
               Kostenlose Beratung
            </a>
          </ScrollReveal>
        </div>

        {/* Side Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:justify-end lg:h-full lg:pb-12">
           <ScrollReveal delay={0.7} width="100%">
              <div className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-md hover:bg-zinc-900/60 transition-colors duration-500 group cursor-default">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                    <Zap size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Installierte Leistung</div>
                    <div className="text-white font-medium"> > 5 Megawatt</div>
                  </div>
                </div>
                
                <div className="flex items-baseline gap-2">
                   <span className="text-6xl font-bold text-white tracking-tight">400+</span>
                   <span className="text-amber-500 text-xl">+</span>
                </div>
                <div className="text-zinc-400 mt-2 font-light">Zufriedene Kunden im Ruhrgebiet vertrauen auf unsere Expertise.</div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs text-white overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                         </div>
                      ))}
                   </div>
                   <div className="text-sm text-zinc-500">
                      <span className="text-white font-bold">5.0</span> Sterne Bewertung
                   </div>
                </div>
              </div>
           </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;