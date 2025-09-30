'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, MessageCircle, Calendar, Sparkles,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { trackCTAClick } from '@/lib/analytics';
import content from '@/data/content.json';

const CTA = () => {
  const { cta } = content;
  const { ref, isVisible } = useScrollReveal();

  const handlePrimaryAction = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackCTAClick(cta.primaryButton, 'cta_section');
    }
  };

  const handleSecondaryAction = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackCTAClick(cta.secondaryButton, 'cta_section');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Main CTA Card */}
        <div className="card p-8 md:p-12 bg-gradient-moka text-center relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0">
            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute top-8 right-8 w-16 h-16 bg-gold-400/10 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-gold-400" />
            </motion.div>

            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute bottom-8 left-8 w-12 h-12 bg-moka-300/20 rounded-lg flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 text-moka-100" />
            </motion.div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-moka-300/10 rounded-full blur-xl" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{
                duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200,
              }}
              className="w-20 h-20 bg-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <MessageCircle className="w-10 h-10 text-moka-900" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-2 text-moka-50 mb-4"
            >
              {cta.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gold-400 font-medium mb-6"
            >
              {cta.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-moka-100 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              {cta.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handlePrimaryAction}
                className="btn bg-gold-400 text-moka-900 hover:bg-gold-300 hover:shadow-gold-lg hover:scale-105 focus:ring-gold-400 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {cta.primaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={handleSecondaryAction}
                className="btn border-2 border-moka-300 text-moka-100 hover:bg-moka-300/20 hover:border-gold-400 hover:text-gold-400 hover:scale-105 focus:ring-moka-300 group"
              >
                {cta.secondaryButton}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold-400/20 via-transparent to-gold-400/20 animate-pulse" />
          </div>
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-8"
        >
          <div className="card card-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-6 h-6 text-moka-900" />
            </div>
            <h4 className="font-bold text-moka-700 mb-2">Respuesta rápida</h4>
            <p className="text-sm text-moka-600">Te respondo en menos de 24 horas</p>
          </div>

          <div className="card card-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-6 h-6 text-moka-900" />
            </div>
            <h4 className="font-bold text-moka-700 mb-2">Consulta gratuita</h4>
            <p className="text-sm text-moka-600">Primera consulta sin compromiso</p>
          </div>

          <div className="card card-hover p-6 text-center group">
            <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-moka-900" />
            </div>
            <h4 className="font-bold text-moka-700 mb-2">Soluciones únicas</h4>
            <p className="text-sm text-moka-600">Adaptadas a tus necesidades</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;
