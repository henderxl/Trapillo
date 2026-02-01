import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  openWhatsApp: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Colección', href: '#coleccion' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#inicio" 
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo />
            <span className={`font-semibold text-xl ${
              isScrolled ? 'text-terra' : 'text-terra'
            }`}>
              Trapillo
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    const offset = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className={`
                  relative font-medium transition-colors
                  ${isScrolled ? 'text-gray-700 hover:text-terra' : 'text-terra hover:text-terra/80'}
                  after:content-[''] after:absolute after:left-0 after:bottom-[-2px]
                  after:w-0 after:h-0.5 after:bg-terra
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={openWhatsApp}
              className="bg-terra text-white px-6 py-2 rounded-full hover:bg-terra/90 transition-all duration-300 flex items-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Comprar</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isMenuOpen 
                ? 'bg-terra/10 text-terra' 
                : isScrolled 
                  ? 'text-terra hover:bg-terra/10' 
                  : 'text-terra hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed left-0 right-0 top-[calc(100%+1px)] bg-white/95 backdrop-blur-md shadow-lg
            transition-all duration-300 origin-top
            ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}
          `}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    const offset = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-terra transition-colors py-2 flex items-center justify-between"
              >
                {link.name}
                <div className="w-1.5 h-1.5 rounded-full bg-terra/30" />
              </a>
            ))}
            <button 
              onClick={() => {
                openWhatsApp();
                setIsMenuOpen(false);
              }}
              className="bg-terra text-white px-6 py-3 rounded-full hover:bg-terra/90 transition-colors w-full flex items-center justify-center gap-2 mt-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;