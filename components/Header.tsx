
import React, { useState, useEffect } from 'react';
import { CameraIcon, MenuIcon, XIcon } from './icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  // simple admin callback is provided via custom event to avoid prop drillingg
  const openAdmin = () => {
    const pwd = prompt('Enter admin password:');
    // very small local check — change as needed
    if (pwd === 'lucas-admin') {
      window.dispatchEvent(new CustomEvent('open-admin'));
    } else if (pwd) {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
          <CameraIcon className="w-6 h-6" />
          <span>Lucas Photography</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <button onClick={openAdmin} className="text-amber-400 hover:text-amber-300 font-semibold">Admin</button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-amber-400">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-lg">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
   