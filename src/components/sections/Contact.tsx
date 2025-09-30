'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trackContactFormSubmit, trackPhoneClick, trackEmailClick } from '@/lib/analytics';
import content from '@/data/content.json';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Introduce un email válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  honeypot: z.string().max(0, 'Campo no válido'), // Anti-spam honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { personal } = content;
  const { ref, isVisible } = useScrollReveal();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('¡Mensaje enviado correctamente! Te responderé pronto.');
        reset();
        trackContactFormSubmit(true);
      } else {
        throw new Error(result.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
      trackContactFormSubmit(false, error instanceof Error ? error.message : 'Unknown error');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setSubmitMessage('');
    }, 5000);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${personal.phone}`, '_self');
    trackPhoneClick();
  };

  const handleEmailClick = () => {
    window.open(`mailto:${personal.email}`, '_self');
    trackEmailClick();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Contacto
        </span>
        <h2 className="heading-2 mb-6">¡Hablemos!</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto">
          ¿Tienes un proyecto interesante? ¿Buscas colaborar? ¡Me encantaría conocer más!
        </p>
      </div>

      <div ref={ref} className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="heading-3 mb-8">Información de contacto</h3>
          
          <div className="space-y-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card card-hover p-6 group cursor-pointer"
              onClick={handleEmailClick}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-moka-900" />
                </div>
                <div>
                  <h4 className="font-bold text-moka-700 group-hover:text-gold-600 transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-moka-600">{personal.email}</p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card card-hover p-6 group cursor-pointer"
              onClick={handlePhoneClick}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-moka-900" />
                </div>
                <div>
                  <h4 className="font-bold text-moka-700 group-hover:text-gold-600 transition-colors duration-300">
                    Teléfono
                  </h4>
                  <p className="text-moka-600">{personal.phone}</p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card card-hover p-6 group"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-moka-900" />
                </div>
                <div>
                  <h4 className="font-bold text-moka-700 group-hover:text-gold-600 transition-colors duration-300">
                    Ubicación
                  </h4>
                  <p className="text-moka-600">{personal.location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-warm rounded-xl"
          >
            <h4 className="font-bold text-moka-700 mb-3">¿Por qué trabajar conmigo?</h4>
            <ul className="space-y-2 text-sm text-moka-600">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gold-600 mt-0.5 mr-2 flex-shrink-0" />
                Respuesta en menos de 24 horas
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gold-600 mt-0.5 mr-2 flex-shrink-0" />
                Consulta inicial gratuita
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gold-600 mt-0.5 mr-2 flex-shrink-0" />
                Soluciones personalizadas
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-gold-600 mt-0.5 mr-2 flex-shrink-0" />
                Comunicación transparente
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="card p-8">
            <h3 className="heading-3 mb-6">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field (hidden) */}
              <input
                {...register('honeypot')}
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label htmlFor="name" className="form-label">
                  Nombre *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="form-label">
                  Asunto *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="¿De qué quieres hablar?"
                />
                {errors.subject && (
                  <p className="form-error">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="form-label">
                  Mensaje *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
                {errors.message && (
                  <p className="form-error">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full btn btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Enviar mensaje
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center p-4 rounded-lg ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  )}
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
