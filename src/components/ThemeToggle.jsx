import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="fixed top-5 right-5 z-40">
      <motion.button
        onClick={toggleTheme}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer
                    ${theme === 'light' ? 'bg-orange-300' : 'bg-gray-800'}`}
        style={{ justifyContent: theme === 'light' ? 'flex-end' : 'flex-start' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
        >
          {theme === 'light' 
            ? <Sun className="w-4 h-4 text-orange-500" />
            : <Moon className="w-4 h-4 text-blue-900" />
          }
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;