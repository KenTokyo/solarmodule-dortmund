import React, { useState } from 'react';
import { Sun, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import ScrollReveal from './ScrollReveal';

const SolarCalculator: React.FC = () => {
  const [consumption, setConsumption] = useState(4500); // kWh
  const [roofSize, setRoofSize] = useState(50); // m2
  
  const systemSize = Math.floor(roofSize / 6); 
  const annualYield = systemSize * 950; 
  const selfUsageRatio = 0.35; 
  const electricityPrice = 0.40; 
  const feedInTariff = 0.08; 

  const savings = Math.round((annualYield * selfUsageRatio * electricityPrice) + (annualYield * (1 - selfUsageRatio) * feedInTariff));
  const co2Saved = (annualYield * 0.4) / 1000;

  const data = [
    { name: 'Eigenverbrauch', value: Math.round(annualYield * selfUsageRatio) },
    { name: 'Einspeisung', value: Math.round(annualYield * (1 - selfUsageRatio)) },
  ];

  const COLORS = ['#fbbf24', '#27272a']; // Amber-400, Zinc-800

  return (
    <section id="calculator" className="py-24 px-4 bg-zinc-900/30 border-y border-white/5 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16 mx-auto" width="100%">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ihr <span className="text-gradient-gold">Sparpotenzial</span></h2>
          <p className="text-zinc-400">Interaktiver Ertragsrechner für Ihren Standort.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Controls */}
          <ScrollReveal delay={0.2} animation="slide-in" className="space-y-12 p-8 rounded-[2rem] bg-zinc-950 border border-zinc-800/50">
            
            {/* Slider 1 */}
            <div className="group">
              <div className="flex justify-between mb-6 items-end">
                <label className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Jährlicher Verbrauch</label>
                <div className="text-3xl font-bold text-white tabular-nums">{consumption} <span className="text-sm font-normal text-zinc-500">kWh</span></div>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="10000" 
                step="100" 
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400 hover:accent-amber-300 transition-all"
              />
              <div className="flex justify-between text-xs text-zinc-600 mt-2 font-mono">
                <span>1.000 kWh</span>
                <span>10.000 kWh</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div className="group">
              <div className="flex justify-between mb-6 items-end">
                <label className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Dachfläche</label>
                <div className="text-3xl font-bold text-white tabular-nums">{roofSize} <span className="text-sm font-normal text-zinc-500">m²</span></div>
              </div>
              <input 
                type="range" 
                min="20" 
                max="150" 
                step="5" 
                value={roofSize}
                onChange={(e) => setRoofSize(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400 hover:accent-amber-300 transition-all"
              />
               <div className="flex justify-between text-xs text-zinc-600 mt-2 font-mono">
                <span>20 m²</span>
                <span>150 m²</span>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-between">
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <Sun className="text-amber-500" size={16} />
                      <span className="text-zinc-400 text-xs font-bold uppercase">Empfohlene Anlage</span>
                   </div>
                   <div className="text-3xl font-bold text-white">{systemSize} kWp</div>
                </div>
                <div className="h-10 w-px bg-zinc-800 mx-4"></div>
                <div className="text-right">
                    <div className="text-zinc-500 text-xs">Produktion ca.</div>
                    <div className="text-white font-medium">{(annualYield/1000).toFixed(1)} MWh / Jahr</div>
                </div>
            </div>
          </ScrollReveal>

          {/* Results Visuals */}
          <ScrollReveal delay={0.4} className="flex flex-col items-center justify-center relative bg-zinc-950 p-8 rounded-[2rem] border border-zinc-800/50 h-full">
            <div className="h-64 w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                    stroke="none"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                    itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                    cursor={false}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Ersparnis</span>
                 <span className="text-4xl font-bold text-white tracking-tighter">~{savings}€</span>
                 <span className="text-zinc-600 text-xs mt-1">pro Jahr</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full mt-8">
                 <div className="flex flex-col items-center p-4 bg-zinc-900 rounded-xl border border-zinc-800/50">
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-2">CO₂ Reduktion</div>
                    <div className="text-xl font-bold text-white">{co2Saved.toFixed(1)} t</div>
                 </div>
                 <div className="flex flex-col items-center p-4 bg-zinc-900 rounded-xl border border-zinc-800/50">
                    <div className="text-zinc-500 text-[10px] uppercase tracking-wider mb-2">Amortisation</div>
                    <div className="text-xl font-bold text-green-400">~ 7-9 Jahre</div>
                 </div>
            </div>
            
            <button className="mt-8 w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Detailliertes Angebot anfordern <ArrowRight size={16} />
            </button>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;