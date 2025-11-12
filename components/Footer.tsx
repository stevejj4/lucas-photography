
import React from 'react';
import { CameraIcon, WhatsAppIcon, InstagramIcon, FacebookIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-amber-400 mb-4">
            <CameraIcon className="w-6 h-6" />
            <span>Lucas Photography</span>
          </a>
          <p className="max-w-md mb-6 text-gray-400">
            Capturing life's most precious moments with passion and creativity.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><WhatsAppIcon className="w-6 h-6"/></a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><InstagramIcon className="w-6 h-6"/></a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FacebookIcon className="w-6 h-6"/></a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><TwitterIcon className="w-6 h-6"/></a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lucas Photography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   