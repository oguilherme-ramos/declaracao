import React from 'react';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/90"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fade-in-up">
        <div className="flex justify-center mb-4">
            <div className="bg-rose-100 p-4 rounded-full shadow-xl">
                <Heart className="w-16 h-16 text-rose-500 fill-rose-400" />
            </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-rose-900 leading-tight drop-shadow-sm">
          Para Minha Namorada
        </h1>
        
        <p className="text-xl md:text-3xl text-rose-700 font-light italic">
          "Você é a melhor coisa que já me aconteceu."
        </p>
        
        <div className="pt-10">
          <a href="#declaracao" className="inline-block px-8 py-3 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Ler minha declaração
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;