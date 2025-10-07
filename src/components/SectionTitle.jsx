import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div {...fadeInUp} className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      <p className="text-[rgb(var(--text-secondary))] text-lg max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

export default SectionTitle;