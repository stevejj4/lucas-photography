
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Lucas Photography
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
          Capturing Moments That Matter
        </p>
        <div className="space-x-4">
          <a href="#portfolio" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            View Portfolio
          </a>
          <a href="#contact" className="bg-transparent border-2 border-amber-500 hover:bg-amber-500 text-amber-500 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
   