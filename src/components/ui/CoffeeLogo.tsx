'use client';

import { motion } from 'framer-motion';

interface CoffeeLogoProps {
  size?: 'small' | 'large';
  className?: string;
}

const CoffeeLogo: React.FC<CoffeeLogoProps> = ({ size = 'small', className = '' }) => {
  const isLarge = size === 'large';

  if (isLarge) {
    // Versión grande para pantalla de carga
    return (
      <div className={`relative w-32 h-32 ${className}`}>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-emerald-400/20 to-blue-400/20 rounded-full blur-md"
        />

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative">
            {/* Taza grande */}
            <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-300 rounded-2xl border-2 border-slate-400 shadow-xl relative overflow-hidden">
              {/* Café */}
              <div className="absolute bottom-1 left-1 right-1 h-4/5 bg-gradient-to-t from-amber-950 to-amber-800 rounded-t-xl rounded-b-xl">
                <motion.div
                  animate={{ x: [0, 8, 0], opacity: [0.8, 0.6, 0.8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1 left-1 right-1 h-1 bg-amber-600 rounded-full"
                />
              </div>
              {/* Espuma */}
              <div className="absolute top-1 left-1 right-1 h-4 bg-gradient-to-b from-slate-50 to-amber-100 rounded-full opacity-95">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-amber-800 font-mono text-sm font-bold">
                  &lt;/&gt;
                </div>
              </div>
              {/* Reflejo */}
              <div className="absolute top-1 left-1 w-4 h-6 bg-gradient-to-br from-white/40 to-transparent rounded-tl-2xl" />
            </div>
            {/* Asa */}
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-4 h-8 border-2 border-slate-400 rounded-r-2xl bg-gradient-to-r from-slate-100 to-slate-300" />
          </div>

          {/* Vapor de código */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full">
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.9, 0.5, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-slate-300/90 font-mono text-xl font-bold"
            >
              &lt;/&gt;
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0], opacity: [0.7, 0.4, 0.7], rotate: [0, 10, 0] }}
              transition={{
                duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5,
              }}
              className="absolute -top-6 left-2 text-amber-400/80 font-mono text-lg"
            >
              {'{}'}
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.8, 0.5, 0.8], rotate: [0, -8, 0] }}
              transition={{
                duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1,
              }}
              className="absolute -top-5 right-2 text-emerald-400/80 font-mono text-base"
            >
              []
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Versión pequeña inspirada en el ejemplo
  return (
    <div className={`relative w-6 h-6 sm:w-7 sm:h-7 ${className}`}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Taza estilo ejemplo */}
        <div className="relative">
          {/* Cuerpo de la taza */}
          <div className="w-4 h-3 sm:w-5 sm:h-4 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-lg relative overflow-hidden shadow-sm">
            {/* Café líquido */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-amber-800 to-amber-700 rounded-b-lg" />

            {/* Símbolos de código en la taza */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white font-mono text-[4px] sm:text-[5px] font-bold opacity-80">
                &lt;/&gt;
              </div>
            </div>
          </div>

          {/* Asa elegante */}
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1.5 h-2.5 sm:w-2 sm:h-3 border-2 border-stone-400 rounded-r-lg bg-gradient-to-r from-stone-200 to-stone-300" />

          {/* Plato base */}
          <div className="absolute -bottom-0.5 -left-0.5 -right-1 h-1 bg-gradient-to-r from-stone-300 to-stone-400 rounded-full opacity-60" />
        </div>

        {/* Vapor de código flotante */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, -3, 0],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-stone-400 font-mono text-[4px] sm:text-[5px] font-bold"
          >
            &lt;/&gt;
          </motion.div>
        </div>

        {/* Líneas de código laterales - movidas dentro del contenedor */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <div className="flex flex-col space-y-0.5">
            <div className="w-0.5 h-0.5 bg-amber-400 rounded-full opacity-60" />
            <div className="w-1 h-0.5 bg-blue-400 rounded-full opacity-60" />
            <div className="w-0.5 h-0.5 bg-emerald-400 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeLogo;
