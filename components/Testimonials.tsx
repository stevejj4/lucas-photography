
import React, { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  const { quote, name, role, image } = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400">What Clients Say</h2>
          <p className="text-lg text-gray-400 mt-2">Kind Words From Happy People</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 shadow-lg text-center transition-opacity duration-500 ease-in-out">
            <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-amber-400"/>
            <p className="text-xl italic text-gray-300 mb-6">"{quote}"</p>
            <h4 className="font-bold text-lg text-amber-400">{name}</h4>
            <p className="text-gray-500">{role}</p>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12 bg-gray-700 hover:bg-amber-500 p-3 rounded-full transition-colors">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12 bg-gray-700 hover:bg-amber-500 p-3 rounded-full transition-colors">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
   