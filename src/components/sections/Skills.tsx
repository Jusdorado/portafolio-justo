'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Database, Settings, Server } from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import content from '@/data/content.json';

const Skills = () => {
  const { skills } = content;
  const { ref, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      icon: Code,
      skills: skills.languages,
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend & Frameworks',
      icon: Palette,
      skills: skills.frontend,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Backend & Bases de Datos',
      icon: Database,
      skills: skills.backend,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'IA & Automatización',
      icon: Zap,
      skills: skills.automation,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Herramientas & DevOps',
      icon: Settings,
      skills: skills.tools,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Mis habilidades
        </span>
        <h2 className="heading-2 mb-6">Habilidades Técnicas</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones eficientes
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <SkillCategory
            key={category.title}
            category={category}
            isVisible={isVisible}
            delay={categoryIndex * 0.1}
          />
        ))}
      </div>
    </div>
  );
};

const SkillCategory = ({ 
  category, 
  isVisible, 
  delay 
}: { 
  category: any; 
  isVisible: boolean; 
  delay: number; 
}) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100 }}
      className="card card-hover p-6 group relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-moka-900" />
          </div>
          <h3 className="font-bold text-moka-700 group-hover:text-gold-600 transition-colors duration-300">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {category.skills.map((skill: any, index: number) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              isVisible={isVisible}
              delay={delay + (index * 0.1)}
            />
          ))}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-colors duration-300"></div>
    </motion.div>
  );
};

const SkillBar = ({ 
  skill, 
  isVisible, 
  delay 
}: { 
  skill: any; 
  isVisible: boolean; 
  delay: number; 
}) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, skill.level, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group/skill"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-moka-700 group-hover/skill:text-gold-600 transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-xs text-moka-500 font-medium">
          {skill.level}%
        </span>
      </div>
      
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${animatedLevel}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            type: 'spring',
            stiffness: 50
          }}
        />
      </div>
      
      <div className="text-xs text-moka-400 mt-1">
        {skill.category}
      </div>
    </motion.div>
  );
};

export default Skills;
