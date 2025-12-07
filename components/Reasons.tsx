import React from 'react';
import { Reason } from '../types';
import * as Icons from "lucide-react"; // Importa todos para lookup dinâmico

const reasonsList: Reason[] = [
{ id: 1, text: "Seu sorriso ilumina meu dia", icon: "Smile" },
{ id: 2, text: "A paz que sinto ao seu lado", icon: "Sun" },
{ id: 3, text: "Nossas conversas infinitas", icon: "Coffee" },
{ id: 4, text: "O jeito que você me entende", icon: "HeartHandshake" },
{ id: 5, text: "Seu gosto musical incrível", icon: "Music" },
{ id: 6, text: "Simplesmente por ser você", icon: "Star" },
{ id: 7, text: "O brilho dos seus olhos quando sorri", icon: "Sparkles" },
{ id: 8, text: "O seu abraço que vira lar", icon: "Home" },
{ id: 9, text: "A forma como fala meu nome", icon: "Quote" },
{ id: 10, text: "Seu cheiro que eu nunca esqueço", icon: "Flower2" },
{ id: 11, text: "Suas piadas que me fazem rir", icon: "Laugh" },
{ id: 12, text: "Seu carinho", icon: "Heart" },
{ id: 13, text: "Seu jeitinho tímido às vezes", icon: "GhostSmile" },
{ id: 14, text: "A confiança que tenho em você", icon: "ShieldCheck" },
{ id: 15, text: "Seu toque que arrepia minha alma", icon: "Touch" },
{ id: 16, text: "A forma como me dá forças", icon: "BatteryCharging" },
{ id: 17, text: "Você torna tudo mais divertido", icon: "PartyPopper" },
{ id: 18, text: "O jeito que você me olha", icon: "Eye" },
{ id: 19, text: "A companhia perfeita em qualquer lugar", icon: "MapPin" },
{ id: 20, text: "Seu apoio nos meus sonhos", icon: "Rocket" },
{ id: 21, text: "A forma como protege quem ama", icon: "ShieldHeart" },
{ id: 22, text: "Seu cuidado com os detalhes", icon: "ListChecks" },
{ id: 23, text: "Os memes que você me manda", icon: "Send" },
{ id: 24, text: "A sua inteligência que me encanta", icon: "Brain" },
{ id: 25, text: "Você sabe me acalmar", icon: "Wave" },
{ id: 26, text: "Seus sonhos", icon: "Moon" },
{ id: 27, text: "Você é meu lugar favorito", icon: "Map" },
{ id: 29, text: "Nossas fotos em momentos simples", icon: "Camera" },
{ id: 30, text: "Seu cuidado com quem você ama", icon: "HandsHeart" },
{ id: 31, text: "Seu abraço que me desmonta", icon: "Armchair" },
{ id: 32, text: "Seu jeito de falar das coisas que ama", icon: "HeartPulse" },
{ id: 33, text: "Nossa sintonia absurda", icon: "Infinity" },
{ id: 34, text: "Seu jeitinho de me provocar", icon: "Flame" },
{ id: 35, text: "Você me inspira a ser melhor", icon: "Sparkle" },
{ id: 36, text: "Seu cuidado com a nossa história", icon: "BookmarkHeart" },
{ id: 37, text: "Seu sorriso antes do beijo", icon: "Kiss" },
{ id: 38, text: "O jeito que segura minha mão", icon: "Hand" },
{ id: 39, text: "A forma como confia em mim", icon: "Handshake" },
{ id: 41, text: "Seus conselhos que sempre ajudam", icon: "Lightbulb" },
{ id: 42, text: "Você ri das minhas bobagens", icon: "Clown" },
{ id: 44, text: "O jeito que me olha apaixonada", icon: "HeartEyes" },
{ id: 45, text: "Você me faz sentir importante", icon: "Award" },
{ id: 47, text: "O jeito que se preocupa comigo", icon: "FirstAidKit" },
{ id: 48, text: "Seu beijo que vicia", icon: "Candy" },
{ id: 49, text: "As saudades que sinto de você", icon: "Hourglass" },
{ id: 50, text: "Seu sorriso quando me pega olhando pra você", icon: "ZoomIn" },
{ id: 51, text: "O jeito que diz que me ama", icon: "Megaphone" },
{ id: 52, text: "Você torna meus dias melhores", icon: "CloudSun" },
{ id: 53, text: "Seu cuidado com os bichinhos", icon: "Cat" },
{ id: 54, text: "O bom gosto pra escolher filmes", icon: "Film" },
{ id: 55, text: "Você cantando", icon: "Mic" },
{ id: 56, text: "Nossas noites conversando sem perceber a hora", icon: "Clock" },
{ id: 57, text: "A forma como você sonha alto", icon: "Stars" },
{ id: 58, text: "Seu toque leve que acalma", icon: "Feather" },
{ id: 59, text: "Seu jeitinho bobo que me ganha", icon: "SmilePlus" },
{ id: 62, text: "Seu perfume que fica em mim", icon: "Droplet" },
{ id: 63, text: "A forma como me olha quando estou falando", icon: "Focus" },
{ id: 64, text: "Você me surpreende todo dia", icon: "Sparkles" },
{ id: 65, text: "A leveza que você traz pra minha vida", icon: "Feather" },
{ id: 66, text: "Seu coração gigante", icon: "Heart" },
{ id: 67, text: "Você me escolheu", icon: "Check" },
{ id: 68, text: "Você me faz sentir amado", icon: "HeartHands" },
{ id: 70, text: "Você é linda sem esforço", icon: "Diamond" },
{ id: 71, text: "Seu humor que combina com o meu", icon: "Smile" },
{ id: 72, text: "Cada detalhe seu é especial", icon: "Star" },
{ id: 73, text: "Seu abraço que cura dias ruins", icon: "Bandage" },
{ id: 74, text: "O jeito que fala de mim pros outros", icon: "MessageHeart" },
{ id: 75, text: "Você torna o normal extraordinário", icon: "Sparkle" },
{ id: 76, text: "Você me faz sentir no lugar certo", icon: "Pin" },
{ id: 78, text: "Você ri até de mim", icon: "Laugh" },
{ id: 79, text: "Seu cuidado com meu coração", icon: "HeartLock" },
{ id: 80, text: "Você é a história que eu quero contar", icon: "BookHeart" },
{ id: 81, text: "Suas manias que eu adoro", icon: "Puzzle" },
{ id: 82, text: "Você combina comigo em tudo", icon: "Link" },
{ id: 83, text: "Você é minha pessoa preferida", icon: "Star" },
{ id: 84, text: "O jeito que me chama de amor", icon: "Heart" },
{ id: 85, text: "Você é a minha calmaria", icon: "Droplets" },
{ id: 86, text: "Cada beijo seu vale um mundo", icon: "Globe" },
{ id: 87, text: "Você confia em mim de verdade", icon: "Lock" },
{ id: 88, text: "Você me dá paz até em chamada", icon: "Phone" },
{ id: 89, text: "Você me faz acreditar no futuro", icon: "CalendarHeart" },
{ id: 90, text: "O jeito que me quer por perto", icon: "Magnet" },
{ id: 91, text: "Você é meu motivo favorito", icon: "Star" },
{ id: 93, text: "A forma como me espera", icon: "HourglassHigh" },
{ id: 94, text: "Você faz meu coração sorrir", icon: "HeartSmile" },
{ id: 95, text: "O jeito que cuida da nossa relação", icon: "SettingsHeart" },
{ id: 96, text: "Você me conhece até pelo olhar", icon: "Eye" },
{ id: 97, text: "Seus planos comigo", icon: "Map" },
{ id: 98, text: "Você é minha aventura favorita", icon: "Tent" },
{ id: 99, text: "A sorte que tenho de te ter", icon: "Clover" },
{ id: 100, text: "Eu te amo muito vida", icon: "Heart" },

];

const getIcon = (name: string) => {
  const Icon = (Icons as any)[name];

  if (!Icon) {
    // Se não existir no Lucide, usa um fallback estiloso
    return <Icons.Star className="w-8 h-8 text-yellow-500" />;
  }

  return <Icon className="w-8 h-8 text-rose-600" />;
};

const Reasons: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-center text-rose-900 mb-12">
          Motivos para te amar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonsList.map((reason) => (
            <div 
              key={reason.id} 
              className="bg-white p-6 rounded-2xl shadow-md border border-rose-100 hover:shadow-lg transition-shadow flex items-center space-x-4"
            >
              <div className="p-3 bg-rose-50 rounded-full">
                {getIcon(reason.icon)}
              </div>
              <p className="text-lg text-gray-700 font-medium">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;