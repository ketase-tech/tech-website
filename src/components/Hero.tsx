'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="hero-background flex items-center justify-center min-h-[50vh] relative">
  {/* overlay for better contrast */}
  <div className="absolute inset-0" aria-hidden="true" />
      <div className="container-default relative z-10">
        <div className="flex items-center justify-center relative">
          <div className="w-full mt-20 pt-16 md:pt-14" ref={heroRef}>
            <motion.div
              style={{ y: translateY }}
              className="text-center w-full max-w-[668px] mx-auto"
            >
              <h1 className="section-title">
                Building Today&#39;s Tech <br /> & Software Solutions
              </h1>
              <p className="pt-4 mx-auto main-paragraph">
                We design, develop, and deploy technology <br />
                that helps businesses scale, connect, and innovate.
              </p>
              <div className="flex justify-center items-center mt-[30px]">
                <Link href="/work" passHref>
                  <button className="btn-primary">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};