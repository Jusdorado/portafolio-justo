'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import CoffeeLogo from '../ui/CoffeeLogo';

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Formación', href: '#formacion' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, name: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Cerrar menú móvil primero
      setIsMobileMenuOpen(false);
      
      // Pequeño delay para que la animación del menú termine
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    } else {
      console.warn(`Element with id "${targetId}" not found`);
      // Cerrar menú aunque no encuentre el elemento
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById('contacto');
    if (element) {
      // Cerrar menú móvil primero
      setIsMobileMenuOpen(false);
      
      // Pequeño delay para que la animación del menú termine
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    } else {
      console.warn('Contact section not found');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-moka shadow-moka-lg'
          : 'bg-moka-500/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center min-w-0 flex-shrink-0"
          >
            <button
              onClick={() => handleNavClick('#inicio', 'Logo')}
              className="flex items-center space-x-1.5 sm:space-x-2 group"
            >
              <CoffeeLogo 
                size="small" 
                className="group-hover:scale-110 transition-all duration-500 group-hover:rotate-3 flex-shrink-0" 
              />
              <span className="font-serif font-bold text-xs sm:text-sm md:text-base text-white group-hover:text-gold-400 transition-colors duration-300 truncate">
                Justo García
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative text-white hover:text-gold-400 transition-colors duration-300 font-medium ${
                  activeSection === item.href.substring(1) ? 'text-gold-400' : ''
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center"
          >
            <button
              onClick={handleContactClick}
              className="btn btn-primary group"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Contáctame
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 sm:p-2.5 rounded-lg bg-gold-400/30 backdrop-blur-sm text-white hover:bg-gold-400/40 transition-all duration-300 border border-gold-400/20 shadow-lg flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-moka-500/98 backdrop-blur-md border-t border-gold-400/30 shadow-xl"
          >
            <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={`text-left py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gold-400/20 text-gold-400 border border-gold-400/30'
                        : 'text-white hover:bg-gold-400/10 hover:text-gold-400'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigation.length * 0.05 }}
                  onClick={handleContactClick}
                  className="btn btn-primary mt-4"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contáctame
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
