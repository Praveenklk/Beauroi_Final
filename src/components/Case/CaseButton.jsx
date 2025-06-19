import React, { useState } from 'react';

export default function AnimatedGradientButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Enhanced animation with more vibrant colors and faster transitions
  const buttonStyle = {
    background: 'linear-gradient(-45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
    backgroundSize: '400% 400%',
    animation: `gradientBg ${isHovered ? '2s' : '3s'} ease infinite`,
    transition: 'transform 0.3s, box-shadow 0.3s, filter 0.3s'
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <div className="relative">
        {/* Glow effect container */}
        <div className={`absolute inset-0 rounded-lg blur-xl opacity-70 transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} style={buttonStyle}></div>
        
        {/* Main button */}
        <button 
          className="relative px-10 py-5 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 z-10"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="relative z-10 flex items-center justify-center">
            <span className="mr-2">Animated Gradient Button</span>
            <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}>→</span>
          </span>
        </button>
      </div>

      {/* Add the necessary animation keyframes with enhanced speed */}
      <style>{`
        @keyframes gradientBg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}