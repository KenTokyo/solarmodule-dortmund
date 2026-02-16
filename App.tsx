import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import SolarCalculator from './components/SolarCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Subtle separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-12 opacity-50" />
        
        <BentoGrid />
        
        <SolarCalculator />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;