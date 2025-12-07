import React from 'react';
import Hero from './components/Hero';
import RelationshipTimer from './components/RelationshipTimer';
import FloatingHearts from './components/FloatingHearts';
import LoveLetter from './components/LoveLetter';
import Reasons from './components/Reasons';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-rose-50 text-gray-800 selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="bg-white/40 backdrop-blur-sm shadow-inner">
           <RelationshipTimer />
        </div>

        <LoveLetter />
        
        <Reasons />
        
        <footer className="py-10 text-center text-rose-400 bg-white">
          <p className="text-sm">
            Feito com todo o <span className="text-red-500">❤</span> do mundo para você.
          </p>
          <p className="text-xs mt-2 opacity-60">25/04/2025</p>
        </footer>
      </main>
    </div>
  );
};

export default App;