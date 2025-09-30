'use client';

import { motion } from 'framer-motion';
import {
  MapPin, Globe, Calendar, Award,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import content from '@/data/content.json';

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const { personal } = content;

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
            Sobre mí
          </span>
          <h2 className="heading-2 mb-6">
            Conoce mi historia
          </h2>
          <p className="text-lg text-moka-600 leading-relaxed mb-6">
            {personal.bio}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card card-hover p-4"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h4 className="font-semibold text-moka-700">Ubicación</h4>
                <p className="text-sm text-moka-500">{personal.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card card-hover p-4"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-gold-400/10 rounded-lg flex items-center justify-center mr-3">
                <Award className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h4 className="font-semibold text-moka-700">Estado</h4>
                <p className="text-sm text-moka-500">{personal.availability}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h4 className="font-semibold text-moka-700 mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-gold-600" />
            Idiomas
          </h4>
          <div className="flex flex-wrap gap-3">
            {personal.languages.map((language, _index) => (
              <div
                key={language.name}
                className="flex items-center bg-moka-100/50 rounded-lg px-4 py-2"
              >
                <span className="font-medium text-moka-700 mr-2">{language.name}</span>
                <span className="text-sm text-moka-500">
                  (
                  {language.level}
                  )
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Visual Element */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative w-80 h-96 mx-auto bg-gradient-warm rounded-2xl overflow-hidden shadow-moka-lg">
            {/* Profile Image Placeholder */}
            <div className="absolute inset-4 bg-moka-500 rounded-xl flex items-center justify-center">
              <div className="text-6xl font-serif font-bold text-gold-400">JG</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">👨‍💻</span>
            </div>

            <div className="absolute bottom-4 left-4 w-16 h-16 bg-moka-300/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-moka"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div>
                <p className="text-xs font-medium text-moka-700">Disponible</p>
                <p className="text-xs text-moka-500">Para proyectos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-moka"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center mr-2">
                <Calendar className="w-4 h-4 text-gold-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-moka-700">1+ años</p>
                <p className="text-xs text-moka-500">Experiencia</p>
              </div>
            </div>
          </motion.div>

          {/* Background Decorations */}
          <div className="absolute -z-10 top-8 left-8 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />
          <div className="absolute -z-10 bottom-8 right-8 w-24 h-24 bg-moka-300/10 rounded-full blur-xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
