import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Phone, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Über uns', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Rechner', href: '#calculator' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav 
        className={`
          relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
          ${scrolled 
            ? 'w-full max-w-2xl bg-zinc-950/70 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl' 
            : 'w-full max-w-7xl bg-transparent border-transparent'
          }
        `}
      >
        {/* Logo Area */}
        <div className="flex items-center gap-3 select-none cursor-pointer">
          <div className="relative flex items-center justify-center">
            <div className={`absolute inset-0 bg-amber-400 blur-lg transition-opacity duration-700 rounded-full ${scrolled ? 'opacity-20' : 'opacity-40'}`}></div>
            <div className="bg-gradient-to-br from-amber-300 to-amber-500 p-2 rounded-full text-black relative z-10 shadow-lg shadow-amber-500/20">
               <Sun size={18} fill="currentColor" className="animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight text-white">
              Solarmodule
            </span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Dortmund</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${scrolled ? 'gap-1' : 'gap-4'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="px-4 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact"
            className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform" />
            <span>Anfrage</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-200 p-2 hover:bg-white/5 rounded-full transition-colors z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0a0a0a]/95 border border-white/10 rounded-3xl p-8 flex flex-col gap-6 shadow-2xl md:hidden backdrop-blur-2xl animate-fade-in-up origin-top z-40">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
                <a 
                key={link.label}
                href={link.href}
                className="text-2xl font-medium text-zinc-400 hover:text-white flex items-center justify-between group"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                </a>
            ))}
          </div>
          <div className="h-px w-full bg-zinc-800" />
          <a 
            href="#contact"
            className="w-full bg-amber-500 text-black py-4 rounded-xl text-center font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Jetzt anfragen
          </a>
        </div>
      )}
    </div>
  );
};

export default Navigation;