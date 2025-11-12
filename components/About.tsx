
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
              I'm Lucas Oyugi, a Nairobi-based documentary and black-and-white photographer. My work explores social justice, identity, and the beauty within struggle. Raised in Kibera, my storytelling is grounded in empathy and truth.
            </p>
            <p>
              I've collaborated with organizations such as Samuel Hall, Ebanos Stories, InYourShoes, SHOFCO, and the Belt of Somali Women.
            </p>
            <p>
              Currently, I partnered with Save Girl Save a Generation and Kibera Kids Library, supporting storytelling.
            </p>
            <p>
              My goal is to document human resilience and the power of community through honest visual narratives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   