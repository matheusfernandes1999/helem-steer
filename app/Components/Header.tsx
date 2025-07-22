"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import Text from './Text';
import Span from './TextGradient';

const menuItems = ["Início", "Sobre", "Formação", "Depoimentos", "Contato"];

// Variantes de animação para o container do menu desktop
const desktopNavVariants: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1], // Custom cubic bezier easing
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Variantes para itens individuais do menu desktop
const desktopItemVariants: Variants = {
  initial: { opacity: 0, y: -15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier easing
    }
  }
};

// Variantes para o menu mobile
const mobileMenuVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

// Variantes para itens do menu mobile
const mobileItemVariants: Variants = {
  initial: {
    x: 50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

// Variantes para o overlay
const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.55, 0.06, 0.68, 0.19] }
  }
};

// Variantes para o botão hamburger
const hamburgerVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, rotate: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1],
      delay: 0.3
    }
  }
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Hook para scroll parallax (opcional)
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], [0, -20]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

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
        className="bg-semantic-background-primary pt-0 md:pt-4 relative z-30"
        style={{ 
          y: headerY,
          opacity: headerOpacity 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.nav 
              className="flex flex-row gap-40 w-full justify-around"
              variants={desktopNavVariants}
              initial="initial"
              animate="animate"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-text-primary text-lg font-semibold hover:text-text-hover transition-colors duration-300 relative group"
                  variants={desktopItemVariants}
                  whileHover={{ 
                    y: -3, 
                    scale: 1.05,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    y: 0,
                    transition: { duration: 0.1 }
                  }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    {item}
                  </motion.span>
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-text-hover"
                    initial={{ width: 0 }}
                    whileHover={{ 
                      width: "100%",
                      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                    }}
                  />
                </motion.a>
              ))}
            </motion.nav>
          )}

          {/* Mobile Header */}
          {isMobile && (
            <motion.div 
              className="flex justify-between items-center w-screen px-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Logo/Brand Space */}
              <motion.div 
                className="w-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              
              {/* Menu Button */}
              <motion.button
                onClick={toggleMenu}
                className="hamburger-button text-primary-helem-500 p-2 rounded-md transition-all duration-200 hover:bg-gray-800 hover:bg-opacity-50"
                aria-label="Toggle menu"
                variants={hamburgerVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ 
                  scale: 0.9,
                  rotate: -5,
                  transition: { duration: 0.1 }
                }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -180, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        rotate: 0, 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }
                      }}
                      exit={{ 
                        rotate: 180, 
                        opacity: 0, 
                        scale: 0.8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <X size={32} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 180, opacity: 0, scale: 0.8 }}
                      animate={{ 
                        rotate: 0, 
                        opacity: 1, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }
                      }}
                      exit={{ 
                        rotate: -180, 
                        opacity: 0, 
                        scale: 0.8,
                        transition: { duration: 0.2 }
                      }}
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
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black"
              variants={overlayVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-semantic-background-primary shadow-xl z-50"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Menu Header */}
              <motion.div 
                className="flex justify-between items-center p-6 border-b border-primary-helem-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
              >
                <motion.h2 
                  className="text-white text-xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: 0.3, duration: 0.5 }
                  }}
                >
                  Helem Steer
                </motion.h2>
                
                <motion.button
                  onClick={toggleMenu}
                  className="text-white p-2 rounded-md transition-all duration-200 hover:bg-primary-helem-500 hover:bg-opacity-50"
                  aria-label="Close menu"
                  whileHover={{ 
                    rotate: 90,
                    scale: 1.1,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    rotate: 180,
                    transition: { duration: 0.1 }
                  }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>

              {/* Menu Items */}
              <motion.nav className="py-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    onClick={handleMenuItemClick}
                    className="block px-6 py-4 text-white text-lg font-medium hover:bg-primary-helem-500 hover:bg-opacity-50 transition-all duration-200 border-b border-primary-helem-400 border-opacity-30 last:border-b-0 group relative overflow-hidden"
                    variants={mobileItemVariants}
                    whileHover={{ 
                      x: 12,
                      backgroundColor: "rgba(var(--primary-helem-500), 0.15)",
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      x: 8,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <motion.span 
                      className="relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        transition: { delay: 0.3 + (index * 0.05) }
                      }}
                    >
                      {item}
                    </motion.span>
                    
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-helem-500 to-primary-helem-400 opacity-0"
                      whileHover={{
                        opacity: 0.1,
                        transition: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Animated underline */}
                    <motion.span 
                      className="absolute bottom-0 left-6 right-6 h-0.5 bg-white"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                    />
                  </motion.a>
                ))}
              </motion.nav>

              {/* Footer */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
              >
                <motion.div 
                  className="text-gray-400 text-sm text-center"
                  whileHover={{
                    color: "#ffffff",
                    transition: { duration: 0.3 }
                  }}
                >
                  © {new Date().getFullYear()} Helem Steer
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;