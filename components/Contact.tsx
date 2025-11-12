
import React, { useState } from 'react';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, TwitterIcon } from './icons';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, you would handle form submission here.
    // We'll simulate a success message.
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-2">Let's create memories together. Reach out for bookings and inquiries.</p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-white p-3"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-white p-3"/>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows={5} required className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 text-white p-3"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Send Message
                        </button>
                    </div>
                    {status && <p className="text-center text-green-400">{status}</p>}
                </form>
            </div>
             <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-400 mb-2">Based in New York, NY</p>
                <p className="text-gray-400 mb-2">Available for worldwide travel.</p>
                <a href="mailto:hello@lucasphoto.com" className="text-amber-400 hover:text-amber-300 text-lg block mb-6">hello@lucasphoto.com</a>

                <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex justify-center md:justify-start space-x-6">
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><WhatsAppIcon className="w-8 h-8"/></a>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><InstagramIcon className="w-8 h-8"/></a>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FacebookIcon className="w-8 h-8"/></a>
                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><TwitterIcon className="w-8 h-8"/></a>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
   