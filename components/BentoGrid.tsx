import React from 'react';
import { Home, Battery, Factory, FileCheck, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
        <ScrollReveal>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
            Unsere <br />
            <span className="text-zinc-700">Expertise.</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2} className="mt-8 md:mt-0">
          <p className="text-zinc-400 max-w-sm text-right md:text-left">
            Maßgeschneiderte Energielösungen für jeden Bedarf. 
            Von privaten Hausdächern bis zu industriellen Großanlagen.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        
        {/* Card 1: Main PV - Large */}
        <div className="group md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-col justify-between card-glow">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1617755370961-75388c3cc268?q=80&w=2070&auto=format&fit=crop" 
              alt="Solar Roof Modern" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 flex justify-between items-start">
             <div className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-colors duration-300">
                <Home size={24} />
             </div>
             <div className="p-3 bg-white rounded-full text-black opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight size={20} />
             </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">Photovoltaik <br/>Komplettanlagen</h3>
            <p className="text-zinc-300 max-w-md font-light leading-relaxed">
              Planung und Installation von Hochleistungs-Modulen. 
              Wir nutzen ausschließlich Tier-1 Komponenten für maximale Langlebigkeit und Effizienz.
            </p>
          </div>
        </div>

        {/* Card 2: Battery Storage - Tall */}
        <div className="group md:col-span-1 md:row-span-2 relative overflow-hidden rounded-[2.5rem] bg-[#101012] border border-white/5 p-10 flex flex-col justify-between card-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="p-4 bg-zinc-800/50 backdrop-blur-md rounded-full w-fit mb-8 border border-white/5">
               <Battery className="text-blue-400 group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Smart <br/>Storage</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Speichern Sie überschüssige Energie für die Nacht. Unsere Systeme optimieren Ihren Eigenverbrauch intelligent.
            </p>
          </div>
          
          <div className="relative z-10 mt-8 space-y-6">
            <div>
                <div className="flex justify-between text-xs text-zinc-400 mb-2 uppercase tracking-wider">
                    <span>Autarkie</span>
                    <span className="text-blue-400 font-bold">85%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 w-[85%] animate-pulse"></div>
                </div>
            </div>
             <div className="flex items-center gap-3 text-xs text-zinc-500">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Notstromfähig & Schwarzstartfähig</span>
            </div>
          </div>
        </div>

        {/* Card 3: Commercial - Wide */}
        <div className="group md:col-span-2 md:row-span-1 relative overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-10 flex flex-row items-center justify-between card-glow">
           <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-gradient-to-l from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div className="flex flex-col justify-center h-full z-10 max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <Factory className="text-amber-500" size={20} />
                <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">Gewerbe & Industrie</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Großprojekte</h3>
              <p className="text-zinc-400 text-sm">Skalierbare Energielösungen für Unternehmen. Reduzieren Sie Ihre Betriebskosten nachhaltig.</p>
           </div>
           
           <div className="hidden md:flex items-center justify-center h-full aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/30 transition-colors overflow-hidden">
               <img src="https://images.unsplash.com/photo-1548613053-220e3a2c4610?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" alt="Industrial" />
           </div>
        </div>

        {/* Card 4: Service/Maintenance */}
        <div className="group md:col-span-1 md:row-span-1 relative overflow-hidden rounded-[2.5rem] bg-white text-black p-8 flex flex-col justify-center cursor-pointer transition-transform hover:-translate-y-1 duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={28} />
            </div>
            <FileCheck size={32} className="mb-4 text-zinc-900" />
            <h3 className="text-2xl font-bold mb-2">Wartung</h3>
            <p className="text-zinc-600 text-sm">Professionelle Reinigung und technischer Check-up.</p>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;