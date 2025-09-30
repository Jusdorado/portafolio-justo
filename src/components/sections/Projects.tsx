'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Calendar, Users, Award, ChevronRight, X,
} from 'lucide-react';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';
import { trackEvent, trackProjectView, trackExternalLink } from '@/lib/analytics';
import content from '@/data/content.json';

const Projects = () => {
  const { projects } = content;
  const { ref, visibleItems } = useStaggeredReveal(projects.length, 200);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    trackProjectView(project.title, project.id);
  };

  const handleExternalLink = (url: string, text: string, projectId: string) => {
    window.open(url, '_blank');
    trackExternalLink(url, text, `project_${projectId}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-600 rounded-full text-sm font-medium mb-4">
          Mi trabajo
        </span>
        <h2 className="heading-2 mb-6">Proyectos Destacados</h2>
        <p className="text-lg text-moka-600 max-w-2xl mx-auto mb-8">
          Una selección de proyectos que demuestran mis habilidades y experiencia
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gold-400 text-moka-900 shadow-gold'
                  : 'bg-moka-100 text-moka-600 hover:bg-gold-100 hover:text-gold-700'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                visibleItems[index]
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="card card-hover relative overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-moka rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-moka-500 flex items-center justify-center">
                    <div className="text-4xl font-serif font-bold text-gold-400">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold-400 text-moka-900 text-xs font-bold rounded-full">
                      Destacado
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completado'
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'En desarrollo'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                    }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-moka-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ChevronRight className="w-8 h-8 text-gold-400 mx-auto mb-2 group-hover:translate-x-1 transition-transform duration-300" />
                      <p className="text-moka-50 text-sm font-medium">Ver detalles</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded-md">
                      {project.category}
                    </span>
                    <span className="text-xs text-moka-500">{project.year}</span>
                  </div>

                  <h3 className="heading-4 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-moka-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-moka-100 text-moka-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-moka-100 text-moka-600 text-xs rounded-md">
                        +
                        {project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-xs text-moka-500">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.team}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/20 rounded-xl transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onExternalLink={handleExternalLink}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectModal = ({
  project,
  onClose,
  onExternalLink,
}: {
  project: any;
  onClose: () => void;
  onExternalLink: (url: string, text: string, projectId: string) => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-moka-900/80 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-moka-100 p-6 rounded-t-2xl">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-md">
                {project.category}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-md ${
                project.status === 'Completado'
                  ? 'bg-green-100 text-green-700'
                  : project.status === 'En desarrollo'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
              }`}
              >
                {project.status}
              </span>
            </div>
            <h2 className="heading-3 text-moka-700 mb-2">{project.title}</h2>
            <p className="text-moka-600">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-moka-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-6 h-6 text-moka-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project Image */}
        <div className="h-64 bg-gradient-moka rounded-xl mb-6 flex items-center justify-center">
          <div className="text-6xl font-serif font-bold text-gold-400">
            {project.title.charAt(0)}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="font-bold text-moka-700 mb-3">Descripción del proyecto</h3>
          <p className="text-moka-600 leading-relaxed mb-4">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Meta Information */}
          <div>
            <h4 className="font-semibold text-moka-700 mb-3">Información del proyecto</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-moka-500">Año:</span>
                <span className="text-moka-700">{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-moka-500">Duración:</span>
                <span className="text-moka-700">{project.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-moka-500">Equipo:</span>
                <span className="text-moka-700">{project.team}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-moka-500">Mi rol:</span>
                <span className="text-moka-700">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-moka-700 mb-3">Tecnologías utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                    key={idx}
                    className="px-3 py-1 bg-moka-100 text-moka-600 text-sm rounded-md"
                  >
                    {tech}
                  </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        {project.challenges && project.solutions && (
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-moka-700 mb-3">Desafíos</h4>
            <ul className="space-y-2">
              {project.challenges.map((challenge: string, idx: number) => (
                    <li key={idx} className="text-sm text-moka-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-moka-700 mb-3">Soluciones</h4>
            <ul className="space-y-2">
              {project.solutions.map((solution: string, idx: number) => (
                    <li key={idx} className="text-sm text-moka-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        )}

        {/* Results */}
        {project.results && (
        <div className="mb-6">
          <h4 className="font-semibold text-moka-700 mb-3">Resultados obtenidos</h4>
          <ul className="space-y-2">
            {project.results.map((result: string, idx: number) => (
              <li key={idx} className="text-sm text-gold-600 flex items-start">
                    <Award className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" />
                    {result}
                  </li>
            ))}
          </ul>
        </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-moka-100">
          {project.links?.live && (
          <button
            onClick={() => onExternalLink(project.links.live, 'Visitar Web', project.id)}
            className="btn btn-primary"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visitar Web
          </button>
          )}
          {project.links?.github && (
          <button
            onClick={() => onExternalLink(project.links.github, 'Ver GitHub', project.id)}
            className="btn btn-secondary"
          >
            <Github className="w-4 h-4 mr-2" />
            Ver GitHub
          </button>
          )}
          {project.links?.case_study && project.links.case_study !== '#' && (
          <button
            onClick={() => onExternalLink(project.links.case_study, 'Caso de Estudio', project.id)}
            className="btn btn-outline"
          >
            Ver Caso de Estudio
          </button>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Projects;
