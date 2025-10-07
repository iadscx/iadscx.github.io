import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10 bg-[rgb(var(--background-end))]">
      <div className="max-w-6xl mx-auto text-center text-[rgb(var(--text-secondary))]">
        <div className="flex justify-center gap-6 mb-4">
          <motion.a 
            href="https://linkedin.com/in/iadscx" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#0A66C2' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://github.com/iadscx"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#EBEBF5' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
        <p className="flex items-center justify-center gap-2 mb-2">
          Diseñado y construido con entusiasmo y <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por Irvin Diaz
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;