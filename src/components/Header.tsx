'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const menuItems = ['Home', 'Solutions', 'Projects', 'About'];

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-2 sm:px-4 py-3 sm:py-4"
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0)',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : '0 0 0 rgba(0,0,0,0)',
            borderRadius: scrolled ? '9999px' : '0px',
            backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
            padding: scrolled ? '0.5rem 1.5rem' : '1rem 1.5rem',
            width: scrolled ? '95%' : '100%',
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="max-w-6xl flex items-center justify-between w-full transition-all duration-300"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Desktop Logo */}
            <span className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/ketase-tech-logo.svg"
                  alt="Ketase Tech"
                  width={120}
                  height={26}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </span>
            {/* Mobile Logo */}
            <span className="block sm:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="/ketase-tech-logo-emblem.svg"
                  alt="Ketase Tech Emblem"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </span>
          </Link>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.07, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-black transition-colors font-medium text-sm"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            className="hidden md:flex items-center space-x-3"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-md flex items-center justify-center border border-gray-300 relative z-50"
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-20 left-2 right-2 z-40 md:hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 space-y-1">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={`/${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuItems.length * 0.05, duration: 0.3 }}
                    className="pt-4 border-t border-gray-100"
                  >
                    <a
                      href="#"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full px-4 py-3 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-900 transition-colors"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}