'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      if (delay > 0) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(true);
      }
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [inView, delay, triggerOnce]);

  return { ref, isVisible };
};

export const useStaggeredReveal = (itemCount: number, staggerDelay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timers: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * staggerDelay);
        
        timers.push(timer);
      }

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [inView, itemCount, staggerDelay]);

  return { ref, visibleItems };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setOffset(rate);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref: elementRef, offset };
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};
