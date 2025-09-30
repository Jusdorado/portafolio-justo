'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { trackEvent } from '@/lib/analytics';
import content from '@/data/content.json';

const Services = () => {
  const { services } = content;
  const { ref, visibleItems } = useStaggeredReveal(services.length, 150);

  const handleServiceInquiry = (serviceTitle: string) => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('service_inquiry', {
        service_name: serviceTitle,
        location: 'services_section'
      });
    }
  };

  const iconMap: { [key: string]: any } = {
    Code,
    Zap,
    Server
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Mis servicios
        </span>
        <h2 className="heading-2 mb-6">¿En qué puedo ayudarte?</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto">
          Ofrezco soluciones tecnológicas personalizadas para impulsar tu negocio
        </p>
      </div>

      {/* Services Grid */}
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;
          
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                visibleItems[index]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="group"
            >
              <div className="card card-hover p-8 h-full relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-moka-900" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-4 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-moka-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-sm text-moka-600">
                        <CheckCircle className="w-4 h-4 text-gold-600 mt-0.5 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-moka-700 mb-3 text-sm">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-moka-100 text-moka-600 text-xs rounded-md hover:bg-gold-100 hover:text-gold-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-gold-600">
                      {service.startingPrice}
                    </span>
                    <span className="text-sm text-moka-500">
                      Precio inicial
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleServiceInquiry(service.title)}
                    className="w-full btn btn-outline group/btn"
                  >
                    Solicitar información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-colors duration-300"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16"
      >
        <div className="card p-8 bg-gradient-warm">
          <h3 className="heading-3 mb-4">¿Necesitas algo personalizado?</h3>
          <p className="text-lg text-moka-600 mb-6 max-w-2xl mx-auto">
            Cada proyecto es único. Hablemos sobre tus necesidades específicas y creemos una solución a medida.
          </p>
          <button
            onClick={() => handleServiceInquiry('Consulta personalizada')}
            className="btn btn-primary"
          >
            Consulta gratuita
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
