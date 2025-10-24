'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Container animation for stagger effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Text elements animation
  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
      },
    },
  };

  // Button container animation
  const buttonContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="hero-background flex items-center justify-center min-h-[50vh] relative">
      {/* overlay for better contrast */}
      <div className="absolute inset-0" aria-hidden="true" />
      <div className="container-default relative z-10">
        <div className="flex items-center justify-center relative">
          <div className="w-full mt-20 pt-16 md:pt-14" ref={heroRef}>
            <motion.div
              style={{ y: translateY }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center w-full max-w-[668px] mx-auto"
            >
              <div className="my-4 px-12  sm:flex sm:justify-center">
                <motion.div 
                variants={textVariants}
                className="relative rounded-full w-auto md:px-8 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  A KETASE Group Subsidiary.{' '}
                  <a href="https://ketasegroup.com/about" className="font-semibold text-primary">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </motion.div>
              </div>
              <motion.h1
                variants={textVariants}
                className="section-title"
              >
                Building Today&#39;s Tech <br /> & Software Solutions
              </motion.h1>

              <motion.p
                variants={textVariants}
                className="pt-4 mx-auto main-paragraph"
              >
                We design, develop, and deploy technology <br />
                that helps businesses scale, connect, and innovate.
              </motion.p>

              <motion.div
                variants={buttonContainerVariants}
                className="flex justify-center items-center mt-[30px]"
              >
                <Link href="/work" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="btn-primary"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;