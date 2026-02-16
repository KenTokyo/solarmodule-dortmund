import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

// Icon wrapper for TikTok since it's not in the current lucide-react version imported
const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

  return (
    <section id="contact" className="py-32 px-4 bg-[#050505] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-xs font-medium uppercase tracking-widest mb-6">
                    Kontakt aufnehmen
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Projekt <br/>starten.</h2>
                <p className="text-zinc-400 text-lg mb-12 font-light leading-relaxed">
                Der erste Schritt zur Unabhängigkeit. Mike Lamers berät Sie ehrlich, kompetent und persönlich vor Ort in Dortmund Aplerbeck.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="space-y-4">
                <a href="https://goo.gl/maps/placeholder" target="_blank" rel="noreferrer" className="flex items-start gap-6 p-4 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer">
                <div className="bg-zinc-900 p-3 rounded-xl text-zinc-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                    <MapPin size={24} />
                </div>
                <div>
                    <h4 className="text-white font-medium text-lg">Hauptstandort</h4>
                    <p className="text-zinc-500 leading-relaxed">
                        Mike Lamers<br/>
                        Ruinenstrasse 29<br/>
                        44287 Dortmund
                    </p>
                </div>
                </a>

                <a href="tel:+4917684903516" className="flex items-center gap-6 p-4 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer">
                <div className="bg-zinc-900 p-3 rounded-xl text-zinc-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                    <Phone size={24} />
                </div>
                <div>
                    <h4 className="text-white font-medium text-lg">+49 176 84903516</h4>
                    <p className="text-zinc-500">Mo-Fr: 08:00 - 18:00 Uhr</p>
                </div>
                </a>

                <a href="mailto:info@solarmodule-dortmund.de" className="flex items-center gap-6 p-4 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 transition-all group cursor-pointer">
                <div className="bg-zinc-900 p-3 rounded-xl text-zinc-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                    <Mail size={24} />
                </div>
                <div>
                    <h4 className="text-white font-medium text-lg">info@solarmodule-dortmund.de</h4>
                    <p className="text-zinc-500">Schnelle Antwort garantiert</p>
                </div>
                </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-12">
            <h5 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-4">Social Media</h5>
            <div className="flex gap-4">
                {[
                    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
                ].map((social, idx) => (
                    <a 
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group"
                        aria-label={social.label}
                    >
                        <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Map Integration */}
            <ScrollReveal delay={0.3} width="100%" className="h-64 w-full rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 relative group">
                <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ruinenstra%C3%9Fe%2029,%2044287%20Dortmund+(Solarmodule%20Dortmund%20-%20Mike%20Lamers)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Standort Solarmodule Dortmund"
                    className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur text-white text-xs py-1 px-3 rounded-full border border-white/10 pointer-events-none">
                    Aplerbeck
                </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.4} width="100%" className="bg-zinc-900/30 border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
                
                {status === 'success' ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                        <p className="text-zinc-400 max-w-xs mx-auto mb-8">Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.</p>
                        <button onClick={() => setStatus('idle')} className="px-8 py-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors font-medium text-sm">Neue Anfrage</button>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2 md:col-span-1 group">
                            <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider group-focus-within:text-amber-500 transition-colors">Name</label>
                            <input required type="text" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-700" placeholder="Ihr Name" />
                        </div>
                        <div className="col-span-2 md:col-span-1 group">
                            <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider group-focus-within:text-amber-500 transition-colors">Telefon</label>
                            <input required type="tel" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-700" placeholder="Für Rückfragen" />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider group-focus-within:text-amber-500 transition-colors">Email</label>
                        <input required type="email" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-700" placeholder="ihre@email.de" />
                    </div>

                    <div className="group">
                        <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider group-focus-within:text-amber-500 transition-colors">Interesse an</label>
                        <div className="relative">
                            <select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:bg-zinc-900 transition-all appearance-none cursor-pointer">
                                <option>Photovoltaik Komplettanlage</option>
                                <option>Stromspeicher Nachrüstung</option>
                                <option>Wallbox & E-Mobilität</option>
                                <option>Wartung & Service</option>
                                <option>Allgemeine Beratung</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider group-focus-within:text-amber-500 transition-colors">Nachricht</label>
                        <textarea rows={4} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:bg-zinc-900 transition-all placeholder:text-zinc-700 resize-none" placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg shadow-white/5"
                    >
                        {status === 'submitting' ? (
                            <span className="animate-pulse">Sende Anfrage...</span>
                        ) : (
                            <>
                                Anfrage absenden <ArrowUpRight size={20} />
                            </>
                        )}
                    </button>
                    <p className="text-[10px] text-zinc-600 text-center mt-4">
                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß der Datenschutzerklärung zu.
                    </p>
                </form>
                )}
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Contact;