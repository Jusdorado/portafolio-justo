'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoffeeLogo from './CoffeeLogo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Esperar un poco antes de ocultar la pantalla
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Esperar a que termine la animación
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Incremento aleatorio más natural
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-moka-900 via-moka-800 to-moka-900 flex flex-col items-center justify-center"
        >
          {/* Logo animado */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-12"
          >
            <div className="relative">
              {/* Círculo de fondo con animación */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-40 h-40 rounded-full border-2 border-gold-400/30"
              />

              {/* Logo idéntico al header pero grande */}
              <CoffeeLogo size="large" />
            </div>
          </motion.div>

          {/* Nombre */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 text-center"
          >
            Justo García Ferrández
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gold-300 text-lg md:text-xl mb-12 text-center max-w-md px-4"
          >
            Programador Junior en IA & Automatización
          </motion.p>

          {/* Barra de progreso */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-64 md:w-80"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gold-300 text-sm font-medium">Cargando</span>
              <span className="text-gold-300 text-sm font-medium">
                {Math.round(progress)}
                %
              </span>
            </div>

            <div className="w-full bg-moka-700/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-gold-400/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 rounded-full shadow-lg"
              />
            </div>
          </motion.div>

          {/* Texto de carga */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-center"
          >
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-gold-200/80 text-sm"
            >
              Preparando la experiencia perfecta...
            </motion.p>
          </motion.div>

          {/* Efectos de fondo sin valores aleatorios */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Partículas fijas para evitar problemas de hidratación */}
            <motion.div
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0,
                ease: 'easeOut',
              }}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full top-1/4 left-1/4"
            />
            <motion.div
              animate={{
                y: [0, -80, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
                ease: 'easeOut',
              }}
              className="absolute w-1 h-1 bg-gold-300/30 rounded-full top-1/3 right-1/3"
            />
            <motion.div
              animate={{
                y: [0, -120, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 2,
                ease: 'easeOut',
              }}
              className="absolute w-1 h-1 bg-gold-500/35 rounded-full bottom-1/3 left-1/2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
