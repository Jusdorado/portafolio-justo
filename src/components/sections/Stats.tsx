'use client';

import { motion } from 'framer-motion';
import { useScrollReveal, useStaggeredReveal } from '@/hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import content from '@/data/content.json';

const Stats = () => {
  const { stats } = content;
  const { ref, visibleItems } = useStaggeredReveal(stats.length, 150);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={
            visibleItems[index]
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 30, scale: 0.9 }
          }
          transition={{ 
            duration: 0.6, 
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
          className="text-center group"
        >
          <div className="card card-hover p-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <AnimatedNumber
                value={stat.number}
                isVisible={visibleItems[index] || false}
                className="text-3xl md:text-4xl font-bold text-moka-700 mb-4"
              />

              <h3 className="font-semibold text-moka-700 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                {stat.label}
              </h3>

              <p className="text-sm text-moka-500 leading-relaxed">
                {stat.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated Number Component
const AnimatedNumber = ({ 
  value, 
  isVisible, 
  className 
}: { 
  value: string; 
  isVisible: boolean; 
  className: string; 
}) => {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    // Extract number and suffix
    const numMatch = value.match(/(\d+)/);
    const suffix = value.replace(/\d+/, '');
    
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseInt(numMatch[1] || '0');
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), targetNum);
      setDisplayValue(`${current}${suffix}`);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <div className={className}>{displayValue}</div>;
};

export default Stats;
