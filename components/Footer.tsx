import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const [showImprint, setShowImprint] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="pt-20 pb-8 border-t border-zinc-900 bg-[#050505] text-center relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-left border-b border-zinc-900 pb-12">
            <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-white mb-4">Solarmodule Dortmund</h3>
                <p className="text-zinc-500 max-w-sm mb-6">
                    Ihr Fachbetrieb für nachhaltige Energielösungen in Aplerbeck. 
                    Qualität, Transparenz und lokale Nähe stehen bei uns an erster Stelle.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Kontakt</h4>
                <ul className="space-y-2 text-zinc-500 text-sm">
                    <li>Mike Lamers</li>
                    <li>Ruinenstrasse 29</li>
                    <li>44287 Dortmund</li>
                    <li className="pt-2"><a href="tel:+4917684903516" className="hover:text-amber-500 transition-colors">+49 176 84903516</a></li>
                    <li><a href="mailto:info@solarmodule-dortmund.de" className="hover:text-amber-500 transition-colors">info@solarmodule-dortmund.de</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Rechtliches</h4>
                 <div className="flex flex-col gap-2 text-sm text-zinc-500">
                    <button onClick={() => { setShowImprint(!showImprint); setShowPrivacy(false); }} className="text-left hover:text-white transition-colors flex items-center gap-2">
                        Impressum {showImprint ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
                    </button>
                    <button onClick={() => { setShowPrivacy(!showPrivacy); setShowImprint(false); }} className="text-left hover:text-white transition-colors flex items-center gap-2">
                        Datenschutz {showPrivacy ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
                    </button>
                </div>
            </div>
        </div>

        {/* Expandable Legal Content */}
        {(showImprint || showPrivacy) && (
            <div className="mb-12 text-left bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 animate-fade-in-up">
                {showImprint && (
                    <div className="text-zinc-400 text-sm space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Impressum</h3>
                        <p>
                            <strong>Angaben gemäß § 5 TMG</strong><br/>
                            Solarmodule Dortmund<br/>
                            Mike Lamers<br/>
                            Ruinenstrasse 29<br/>
                            44287 Dortmund<br/>
                        </p>
                        <p>
                            <strong>Kontakt</strong><br/>
                            Telefon: +49 176 84903516<br/>
                            E-Mail: info@solarmodule-dortmund.de
                        </p>
                        <p>
                            <strong>Umsatzsteuer-ID</strong><br/>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
                            [DE Platzhalter]
                        </p>
                        <p className="text-xs text-zinc-600 mt-4">
                            Quelle: e-recht24.de
                        </p>
                    </div>
                )}
                {showPrivacy && (
                    <div className="text-zinc-400 text-sm space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Datenschutzerklärung</h3>
                        <p>
                            <strong>1. Datenschutz auf einen Blick</strong><br/>
                            Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <p>
                            <strong>2. Hosting</strong><br/>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Platzhalter Hoster].
                        </p>
                        <p>
                            <strong>3. Allgemeine Hinweise und Pflichtinformationen</strong><br/>
                            Datenschutz: Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p>
                           <strong>Verantwortliche Stelle:</strong><br/>
                           Mike Lamers, Ruinenstrasse 29, 44287 Dortmund.
                        </p>
                    </div>
                )}
            </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Solarmodule Dortmund. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white"><Facebook size={16}/></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white"><Instagram size={16}/></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={16}/></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white"><Youtube size={16}/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;