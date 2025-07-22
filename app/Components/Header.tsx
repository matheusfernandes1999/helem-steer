"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Text from './Text';
import Span from './TextGradient';

const menuItems = ["Início", "Sobre", "Formação", "Depoimentos", "Contato"];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className="bg-semantic-background-primary py-4"
       
        initial="initial"
        animate="animate"
      >
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.nav 
              className="flex flex-row gap-40 w-full justify-around"
              
              initial="initial"
              animate="animate"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-text-primary text-lg font-semibold hover:text-text-hover transition-colors duration-300 relative group"
                  whileHover={{ 
                    y: -2, 
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-text-hover transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </motion.nav>
          )}

          {/* Mobile Header */}
          {isMobile && (
            <motion.div 
              className="flex justify-between items-center w-screen px-2"
              
              initial="initial"
              animate="animate"
            >
              {/* Empty div for left spacing */}
              <div className="w-10"></div>
              
              {/* Centered Title */}
              <motion.div 
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }}
              >
                <Text type='subtitle'>
                  <Span>Helem Steer</Span>
                </Text>
              </motion.div>
              
              {/* Menu Button */}
              <motion.button
                onClick={toggleMenu}
                className="hamburger-button text-primary-helem-500 p-2 rounded-md transition-all duration-200 hover:bg-gray-800 hover:bg-opacity-50"
                aria-label="Toggle menu"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <X size={32} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Menu size={32} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-semantic-background-primary shadow-xl"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Menu Header */}
              <motion.div 
                className="flex justify-between items-center p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }}
              >
                <h2 className="text-white text-xl font-semibold">Helem Steer</h2>
                <motion.button
                  onClick={toggleMenu}
                  className="text-white p-2 rounded-md transition-all duration-200 hover:bg-primary-helem-500 hover:bg-opacity-50"
                  aria-label="Close menu"
                  whileHover={{ 
                    rotate: 90,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>

              {/* Menu Items */}
              <motion.nav 
                className="py-6"
                initial="initial"
                animate="animate"
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    onClick={handleMenuItemClick}
                    className="block px-6 py-4 text-white text-lg font-medium hover:bg-primary-helem-500 hover:bg-opacity-50 transition-all duration-200 border-b border-primary-helem-400 last:border-b-0 group"
                    whileHover={{ 
                      x: 8,
                      backgroundColor: "rgba(var(--primary-helem-500), 0.1)",
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </motion.a>
                ))}
              </motion.nav>

              {/* Additional Content */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: 0.8,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }}
              >
                <div className="text-gray-400 text-sm text-center">
                  © {new Date().getFullYear()} Helem Steer
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;