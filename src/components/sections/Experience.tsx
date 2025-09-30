'use client';

import { motion } from 'framer-motion';
import {
  Calendar, MapPin, Award, Briefcase, Code, Users, TrendingUp,
} from 'lucide-react';
import content from '@/data/content.json';

const Experience = () => {
  const { experience } = content;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
            Mi trayectoria
          </span>
          <h2 className="heading-2 mb-6">Experiencia Profesional</h2>
          <p className="text-lg text-moka-600 max-w-2xl mx-auto">
            Mi recorrido profesional desarrollando soluciones tecnológicas innovadoras
          </p>
        </motion.div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6 md:space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="card card-hover group relative overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-moka p-4 md:p-6 text-white">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-bold mb-1 truncate">{exp.role}</h3>
                      <p className="text-moka-100 font-medium text-sm md:text-base">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:text-right space-y-1">
                    <div className="flex items-center text-moka-100 text-xs md:text-sm">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-moka-100 text-xs md:text-sm">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <p className="text-moka-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{exp.description}</p>

                {/* Responsibilities */}
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-moka-700 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <Users className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gold-600" />
                    Responsabilidades:
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    {exp.responsibilities.map((resp: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gold-400 rounded-full mt-2 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-moka-600 text-sm md:text-base">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold text-moka-700 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <Code className="w-4 h-4 md:w-5 md:h-5 mr-2 text-moka-500" />
                    Tecnologías:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.technologies.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 md:px-3 md:py-1 bg-moka-100 text-moka-700 rounded-full text-xs md:text-sm font-medium hover:bg-gold-100 hover:text-gold-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-moka-700 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                    <TrendingUp className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gold-500" />
                    Logros destacados:
                  </h4>
                  <ul className="space-y-1 md:space-y-2">
                    {exp.achievements.map((achievement: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <Award className="w-3 h-3 md:w-4 md:h-4 text-gold-400 mt-1 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-moka-600 text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
