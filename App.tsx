
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { portfolioImages } from './constants';
import type { PortfolioItem } from './types';

const App: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  const openLightbox = (item: PortfolioItem, index: number) => {
    setLightboxImage(item);
    setCurrentImageIndex(index);
  };


  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % portfolioImages.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(portfolioImages[nextIndex]);
  };

  const showPrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(portfolioImages[prevIndex]);
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased">
      <Header />
  <main>
        <Hero />
        <About />
  <Project onImageClick={openLightbox} />
  <Achievements />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={closeLightbox}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </div>
  );
};

export default App;
   