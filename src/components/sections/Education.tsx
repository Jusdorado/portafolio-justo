'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap, Calendar, MapPin, Award, ExternalLink, CheckCircle,
} from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { trackEvent } from '@/lib/analytics';
import content from '@/data/content.json';

const Education = () => {
  const { education, certifications } = content;
  const { ref: educationRef, visibleItems: educationVisible } = useStaggeredReveal(education.length, 150);
  const { ref: certRef, visibleItems: certVisible } = useStaggeredReveal(certifications.length, 100);

  const handleCertificateClick = (cert: any) => {
    if (cert.credentialUrl && cert.credentialUrl !== '#') {
      window.open(cert.credentialUrl, '_blank');
      trackEvent('external_link_click', {
        link_url: cert.credentialUrl,
        link_text: cert.name,
        location: 'education_section',
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Mi formación
        </span>
        <h2 className="heading-2 mb-6">Formación y Certificaciones</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto">
          Formación académica y certificaciones profesionales que respaldan mi experiencia
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="heading-3 mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-gold-600" />
            Formación Académica
          </h3>

          <div ref={educationRef} className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  educationVisible[index]
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="card card-hover p-6 group relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-6 h-6 text-moka-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-moka-700 group-hover:text-gold-600 transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <p className="text-gold-600 font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {edu.status}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-moka-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-moka-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Subjects */}
                  {edu.subjects && (
                    <div>
                      <h5 className="font-semibold text-moka-700 mb-2">Materias destacadas:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-moka-100 text-moka-600 text-xs rounded-md hover:bg-gold-100 hover:text-gold-700 transition-colors duration-200"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="heading-3 mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-gold-600" />
            Certificaciones
          </h3>

          <div ref={certRef} className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 30 }}
                animate={
                  certVisible[index]
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className={`card card-hover p-4 group relative overflow-hidden ${
                  cert.credentialUrl && cert.credentialUrl !== '#'
                    ? 'cursor-pointer'
                    : ''
                }`}
                onClick={() => handleCertificateClick(cert)}
              >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center flex-1">
                      <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-5 h-5 text-moka-900" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-moka-700 group-hover:text-gold-600 transition-colors duration-300 mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gold-600 font-medium mb-1">{cert.issuer}</p>
                        <p className="text-xs text-moka-500 mb-2">{cert.date}</p>

                        {cert.duration && (
                          <span className="inline-block px-2 py-1 bg-moka-100 text-moka-600 text-xs rounded-md">
                            {cert.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center ml-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <ExternalLink className="w-4 h-4 text-moka-400 group-hover:text-gold-600 transition-colors duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-moka-600 mt-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  {cert.skills && (
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gold-100 text-gold-700 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
