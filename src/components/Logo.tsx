import React from 'react';

const Logo = () => {
  return (
    <div className="relative w-12 h-12 cursor-pointer group">
      {/* Círculos concéntricos animados que representan el ovillo */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`
            absolute inset-0 rounded-full border-2 border-terra
            group-hover:scale-110 transition-transform
            animate-spin-slow-${i}
          `}
          style={{
            animationDuration: `${8 + i * 2}s`,
            transform: `rotate(${i * 30}deg)`
          }}
        />
      ))}
      {/* Línea que simula el hilo desenrollándose */}
      <div className="absolute -right-2 top-1/2 w-8 h-0.5 bg-terra origin-left group-hover:w-12 transition-all duration-500 group-hover:rotate-12" />
      <div className="absolute right-6 top-1/2 w-2 h-0.5 bg-terra origin-left rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </div>
  );
};

export default Logo;