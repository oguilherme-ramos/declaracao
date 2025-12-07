import React from 'react';

const LoveLetter: React.FC = () => {
  return (
    <section id="declaracao" className="py-20 px-4 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-300 via-rose-500 to-rose-300"></div>
        <div className="absolute -right-10 -top-10 text-rose-100 opacity-50">
           <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>

        <h2 className="text-3xl md:text-5xl text-rose-800 text-center mb-8 font-serif">
          Minha Declaração
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light text-justify">
          <p>
            Vida,
          </p>
          <p>
            Escrevo essa cartinha para tentar expressar o quanto você significa para mim. 
            Desde o dia em que nossos caminhos se cruzaram, 
            minha vida ganhou novas cores e um sentido que eu jamais imaginei encontrar.
          </p>
          <p>
            Cada momento ao seu lado é um presente. Seu sorriso é meu abrigo, sua voz é minha melodia favorita 
            e seu abraço é o único lugar onde o mundo parece parar. Você me inspira a ser alguém melhor todos os dias.
          </p>
          <p>
            Eu prometo estar ao seu lado em todos os momentos, nos dias de sol e nas tempestades. 
            Prometo te fazer rir quando quiser chorar e celebrar cada pequena vitória sua como se fosse minha.
          </p>
          <p>
            Eu te amo mais do que as palavras podem dizer, hoje e para sempre.
          </p>
          <div className="pt-8 text-right">
            <p className="font-serif text-2xl text-rose-600">Com todo meu amor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;