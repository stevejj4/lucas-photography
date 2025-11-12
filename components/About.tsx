
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400">About Me</h2>
          <p className="text-lg text-gray-400 mt-2">My Journey Behind The Lens</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/1005/600/800" 
              alt="Lucas, the photographer" 
              className="rounded-lg shadow-2xl object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-300 space-y-6">
            <p>
              Hello! I'm Lucas, a passionate photographer dedicated to freezing moments in time. My love for photography started over a decade ago with a simple film camera, and it has since evolved into a full-blown obsession with light, emotion, and storytelling.
            </p>
            <p>
              My style is a blend of candid documentary and timeless editorial. I believe the best photos are unscripted—the genuine smiles, the quiet tears, the bursts of laughter. My goal is to create images that not only look beautiful but also feel authentic and transport you back to that exact moment.
            </p>
            <p>
              Whether it's the intimate vows of a wedding, the proud gaze of a graduate, or the raw beauty of nature, I strive to capture the essence of the story unfolding before my camera. Let's create something beautiful together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   