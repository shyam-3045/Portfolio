
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors duration-300 glow"
              >
                Download Resume
              </motion.button>
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="w-full h-0.5 bg-white transition-all duration-300"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-white transition-all duration-300"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="w-full h-0.5 bg-white transition-all duration-300"
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors duration-300 glow"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
