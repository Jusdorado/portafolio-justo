'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Mail, MapPin, Heart } from 'lucide-react';
import { trackEvent, trackExternalLink } from '@/lib/analytics';
import content from '@/data/content.json';
import CoffeeLogo from '../ui/CoffeeLogo';

const Footer = () => {
  const { personal } = content;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('scroll_to_top', { location: 'footer' });
  };

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
    trackExternalLink(url, platform, 'footer');
  };

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string, name: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('navigation_click', {
        section: name,
        location: 'footer',
      });
    }
  };

  return (
    <footer className="bg-gradient-moka text-moka-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-moka-300/10 rounded-full blur-xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <CoffeeLogo 
                      size="small" 
                      className="scale-150 hover:scale-[1.7] transition-all duration-500 hover:rotate-3" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-moka-50">
                      {personal.name}
                    </h3>
                    <p className="text-gold-400 text-sm">{personal.title}</p>
                  </div>
                </div>
                
                <p className="text-moka-100 leading-relaxed mb-6 max-w-md">
                  Especializado en inteligencia artificial, automatización de procesos y desarrollo web. 
                  Creando soluciones eficientes que impulsan el crecimiento de tu negocio.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-moka-100">
                    <Mail className="w-4 h-4 mr-3 text-gold-400" />
                    <a 
                      href={`mailto:${personal.email}`}
                      className="hover:text-gold-400 transition-colors duration-300"
                      onClick={() => trackEvent('email_click', { location: 'footer' })}
                    >
                      {personal.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-moka-100">
                    <MapPin className="w-4 h-4 mr-3 text-gold-400" />
                    {personal.location}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-moka-50 mb-6">Navegación</h4>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavClick(item.href, item.name)}
                        className="text-moka-100 hover:text-gold-400 transition-colors duration-300 text-sm"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social & CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-moka-50 mb-6">Sígueme</h4>
                
                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  <button
                    onClick={() => handleSocialClick('GitHub', personal.social.github)}
                    className="w-10 h-10 bg-moka-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-moka-100 hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleSocialClick('LinkedIn', personal.social.linkedin)}
                    className="w-10 h-10 bg-moka-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-moka-100 hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleSocialClick('Email', `mailto:${personal.email}`)}
                    className="w-10 h-10 bg-moka-600/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-moka-100 hover:bg-gold-400/20 hover:text-gold-400 transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>

                {/* Back to Top Button */}
                <button
                  onClick={handleScrollToTop}
                  className="w-full btn bg-gold-400/20 text-gold-400 border border-gold-400/30 hover:bg-gold-400 hover:text-moka-900 group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  Volver arriba
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-moka-400/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-moka-100 mb-4 md:mb-0">
              <span>© {currentYear} {personal.name}. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center text-sm text-moka-100">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current animate-pulse" />
              <span>en Orihuela, España</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
