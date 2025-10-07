import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Hola <span className='font-semibold text-purple-300'>Amigo</span> Amigo.
        Bienvenido a mi portafolio. Soy Irvin, un Ingeniero de Datos con una pasión por transformar datos en información valiosa.
    </motion.p>
  );
};

export default WelcomeMessage;