import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Waypoints, Target } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
const About = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.6
    }
  };
  return <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Sobre Mí" subtitle="Mi viaje profesional y pasión por los datos" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div {...fadeInUp} transition={{
          delay: 0.2
        }} className="w-full h-full">
            <img alt="Irivn Diaz vestido de Ingeniero Petrolero" className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-orange-900/40" src="/images/IDz.jpg" />
          </motion.div>

          <motion.div {...fadeInUp} transition={{
          delay: 0.3
        }} className="flex flex-col justify-center space-y-6 text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
            <p>Soy Irvin Diaz, egresado de Ingeniería Petrolera de la UNAM amante de los datos y de toda la ingeniería que hay detrás. Mi experiencia en la industria petrolera me ha enseñado la importancia de tomar decisiones basadas en información precisa.</p>
            <p>Actualmente estoy construyendo mi camino profesional en el mundo de los datos, fortaleciendo mis habilidades para extraer, depurar, procesar y automatizar información para mejorar la toma de decisiones.</p>
            <p>He participado en proyectos vinculados a la industria petrolera, principalmente dentro del entorno de PEMEX, los cuales son de uso confidencial del Gobierno de México. Sin embargo, estoy desarrollando proyectos personales que reflejan las mismas habilidades y metodologías aplicadas en entornos reales de datos.</p>
            <p>Mi objetivo actual es dar el salto hacia nuevas industrias donde pueda seguir aplicando y expandiendo mis conocimientos en el diseño, manejo, procesamiento y análisis de datos.</p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;
