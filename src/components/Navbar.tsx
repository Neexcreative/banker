'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              <span className="text-red-600">MOTION</span>DESIGNER
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
                Projects
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">
                Testimonials
              </Link>
              <Link href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#services" 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
