
import React, { useState } from 'react';
import { portfolioImages } from '../constants';
import type { PortfolioItem } from '../types';

interface PortfolioProps {
  onImageClick: (item: PortfolioItem, index: number) => void;
}

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Nature'];

const Portfolio: React.FC<PortfolioProps> = ({ onImageClick }) => {
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400">My Work</h2>
          <p className="text-lg text-gray-400 mt-2">A Selection of My Favorite Shots</p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${filter === category ? 'bg-amber-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-amber-500/50'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg"
              onClick={() => onImageClick(item, portfolioImages.findIndex(p => p.id === item.id))}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white text-lg font-bold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
   