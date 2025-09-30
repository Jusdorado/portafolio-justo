'use client';

import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import content from '@/data/content.json';

const Testimonials = () => {
  const { testimonials } = content;
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Testimonios
        </span>
        <h2 className="heading-2 mb-6">Lo que dicen mis clientes</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto">
          La satisfacción de mis clientes es mi mayor motivación
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div ref={ref} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-8 left-8 w-16 h-16 text-gold-400/20">
            <Quote className="w-full h-full" />
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-gold-400 fill-current"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-moka-700 font-serif leading-relaxed mb-8 max-w-3xl mx-auto">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold text-moka-900">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-moka-700">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-moka-500 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gold-600 text-sm font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-moka-600 hover:text-gold-600 hover:bg-white transition-all duration-300 shadow-moka"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-moka-600 hover:text-gold-600 hover:bg-white transition-all duration-300 shadow-moka"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </motion.div>

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold-400 scale-110'
                    : 'bg-moka-300 hover:bg-gold-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Stats or Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-moka-900">100%</span>
          </div>
          <h4 className="font-bold text-moka-700 mb-2">Satisfacción</h4>
          <p className="text-sm text-moka-600">Clientes satisfechos con los resultados</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-moka-900">24h</span>
          </div>
          <h4 className="font-bold text-moka-700 mb-2">Respuesta</h4>
          <p className="text-sm text-moka-600">Tiempo máximo de respuesta</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-moka-900">3+</span>
          </div>
          <h4 className="font-bold text-moka-700 mb-2">Proyectos</h4>
          <p className="text-sm text-moka-600">Completados exitosamente</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
