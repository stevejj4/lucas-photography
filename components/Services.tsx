
import React from 'react';
import { services } from '../constants';
import { CheckCircleIcon } from './icons';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400">Services & Pricing</h2>
          <p className="text-lg text-gray-400 mt-2">Packages Tailored For Your Needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 flex flex-col shadow-xl border border-gray-700 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-2">{service.title}</h3>
              <p className="text-4xl font-extrabold mb-4">{service.price}</p>
              <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Request a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
   