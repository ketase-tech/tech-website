'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/project-images/vssl.png',
  '/project-images/inno-page.png',
  '/project-images/koakh-fit-website.png',
  '/project-images/jicogo.png',
  '/project-images/ekhaya.png',
];

const TickerRow = ({
  direction = 'left',
  speed = 40,
}: {
  direction?: 'left' | 'right';
  speed?: number;
}) => {
  // Duplicate images enough times to ensure seamless loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        className="flex gap-4 sm:gap-6 md:gap-8"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        style={{ willChange: 'transform' }}
      >
        {duplicatedImages.map((src, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 relative w-[240px] h-[235px] sm:w-[280px] sm:h-[260px] md:w-[380px] md:h-[315px] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={src}
              alt={`Project ${(idx % images.length) + 1}`}
              fill
              className="object-cover"
              draggable={false}
              priority={idx < images.length}
              unoptimized
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 380px"
            />
          </div>
        ))}
      </motion.div>
      
      {/* Gradient overlays for smooth edge fade */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default function ImageTicker() {
  return (
    <section className="py-8 md:py-12 bg-white w-full overflow-hidden">
      <div className="space-y-4 md:space-y-6">
        <TickerRow direction="left" speed={15} />
        <TickerRow direction="right" speed={15} />
      </div>
    </section>
  );
}