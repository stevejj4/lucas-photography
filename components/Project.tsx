import React, { useEffect, useState, useRef } from 'react';
import { portfolioImages } from '../constants';
import type { PortfolioItem } from '../types';

interface ProjectProps {
  onImageClick: (item: PortfolioItem, index: number) => void;
}

const Project: React.FC<ProjectProps> = ({ onImageClick }) => {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const images = portfolioImages;

  useEffect(() => {
    if (!playing) return;
    timeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [index, playing, images.length]);

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-amber-400">Projects</h2>
          <p className="text-lg text-gray-400 mt-2">A curated slideshow of selected projects</p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {images.map((img, i) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className={`w-full h-96 object-cover absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ left: 0 }}
              onClick={() => onImageClick(img, i)}
              loading="lazy"
            />
          ))}

          <div className="absolute inset-0 flex items-end justify-between p-4 pointer-events-none">
            <div className="pointer-events-auto">
              <button onClick={goPrev} className="px-3 py-2 bg-black/60 text-white rounded mr-2">Prev</button>
              <button onClick={() => setPlaying((p) => !p)} className="px-3 py-2 bg-black/60 text-white rounded mr-2">{playing ? 'Pause' : 'Play'}</button>
              <button onClick={goNext} className="px-3 py-2 bg-black/60 text-white rounded">Next</button>
            </div>
            <div className="pointer-events-auto text-white bg-black/50 px-3 py-1 rounded text-sm">{index + 1} / {images.length}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
