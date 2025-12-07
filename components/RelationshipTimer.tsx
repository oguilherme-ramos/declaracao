import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { Heart, Clock } from 'lucide-react';

const RelationshipTimer: React.FC = () => {
  // Date provided: April 25, 2025
  const TARGET_DATE = new Date('2025-04-25T00:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = now.getTime() - TARGET_DATE.getTime();
    
    // Check if the date is in the future (negative difference)
    const isFuture = difference < 0;
    const absDiff = Math.abs(difference);

    return {
      days: Math.floor(absDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((absDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((absDiff / 1000 / 60) % 60),
      seconds: Math.floor((absDiff / 1000) % 60),
      isFuture
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] shadow-lg border border-rose-100">
      <span className="text-2xl sm:text-4xl font-bold text-rose-600 font-serif tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-rose-800 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4 py-12 relative z-10">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="w-6 h-6 text-rose-500" />
        <h2 className="text-2xl sm:text-4xl font-bold text-rose-800 font-serif">
          {timeLeft.isFuture ? "Contando os dias para" : "Juntos há"}
        </h2>
      </div>

      <p className="text-rose-600 mb-8 text-lg italic">
        {timeLeft.isFuture 
          ? "Nosso momento especial em 25 de Abril de 2025" 
          : "Desde aquele dia mágico em 25 de Abril de 2025"}
      </p>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>

      <div className="mt-12 flex justify-center">
        <Heart className="text-rose-500 w-12 h-12 animate-pulse fill-rose-500" />
      </div>
    </div>
  );
};

export default RelationshipTimer;