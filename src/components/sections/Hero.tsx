'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown, Download, ExternalLink, Github,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { trackEvent, trackCTAClick } from '@/lib/analytics';
import content from '@/data/content.json';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { personal } = content;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTAClick = (action: string) => {
    if (action === 'projects') {
      const element = document.getElementById('proyectos');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        trackCTAClick('Ver Proyectos', 'hero');
      }
    } else if (action === 'contact') {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        trackCTAClick('Contáctame', 'hero');
      }
    }
  };

  const handleScrollDown = () => {
    const element = document.getElementById('sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('scroll_indicator_click', { location: 'hero' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-moka pt-14 sm:pt-16 md:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-moka-300/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.1,
            y: mousePosition.y * -0.1,
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gold-400/20 text-gold-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                👋 ¡Hola! Soy
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-moka-50 leading-tight mb-4">
                {personal.name}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold-400 font-serif font-semibold mb-6">
                {personal.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-moka-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
            >
              {personal.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0"
            >
              <button
                onClick={() => handleCTAClick('projects')}
                className="btn btn-primary group"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Ver Proyectos
              </button>
              <button
                onClick={() => handleCTAClick('contact')}
                className="btn btn-outline"
              >
                Contáctame
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-moka-600/50 backdrop-blur-sm text-moka-100 rounded-lg hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                onClick={() => trackEvent('external_link_click', {
                  link_url: personal.social.github,
                  link_text: 'GitHub',
                  location: 'hero',
                })}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-moka-600/50 backdrop-blur-sm text-moka-100 rounded-lg hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                onClick={() => trackEvent('external_link_click', {
                  link_url: personal.social.linkedin,
                  link_text: 'LinkedIn',
                  location: 'hero',
                })}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 bg-moka-600/50 backdrop-blur-sm text-moka-100 rounded-lg hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                onClick={() => trackEvent('email_click', { location: 'hero' })}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-gold rounded-full p-1">
                <div className="w-full h-full bg-moka-600 rounded-full flex items-center justify-center text-6xl font-serif font-bold text-gold-400">
                  JG
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gold-400/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-moka-300/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-accent-olive/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-moka-100 hover:text-gold-400 transition-colors duration-300 group"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-80">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
