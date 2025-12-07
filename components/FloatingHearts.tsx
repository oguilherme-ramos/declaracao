import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    // Generate a static set of hearts to render
    const heartCount = 15;
    const newHearts = Array.from({ length: heartCount }, (_, i) => i);
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((i) => {
        const left = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 20;
        const animationDelay = Math.random() * 20;
        const size = 10 + Math.random() * 30;

        return (
          <div
            key={i}
            className="heart-float text-rose-300/40"
            style={{
              left: `${left}%`,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              fontSize: `${size}px`,
            }}
          >
            ❤
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;