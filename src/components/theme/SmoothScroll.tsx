'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track native scroll
  const scrollPosition = useMotionValue(0);

  // Smooth the scroll with inertia
  const smoothScroll = useSpring(scrollPosition, {
    stiffness: 50, // lower = more fluid
    damping: 20,   // lower = more delay
    mass: 1,
  });

  // Invert scroll for natural movement
  const invertedY = useTransform(smoothScroll, (val) => -val);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      scrollPosition.set(container.scrollTop);
    };

    container.addEventListener('scroll', onScroll);
    return () => container.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  return (
    <div
      ref={scrollRef}
      className="h-screen w-full overflow-y-scroll"
      style={{ perspective: '1px' }} // optional for parallax
    >
      <motion.div style={{ y: invertedY, willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  );
}