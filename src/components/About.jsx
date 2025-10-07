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
        }} className="w-full h-auto">
            <img alt="Ingeniero trabajando con visualizaciones de datos en una pantalla" className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-orange-900/30" src="https://images.unsplash.com/photo-1571677246347-5040036b95cc" />
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

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div {...fadeInUp} transition={{
          delay: 0.4
        }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
              <Sliders className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Experiencia</h3>
            <p className="text-[rgb(var(--text-secondary))]">Sólida base en análisis técnico y resolución de problemas de la ingeniería petrolera.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{
          delay: 0.5
        }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
              <Waypoints className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Transición</h3>
            <p className="text-[rgb(var(--text-secondary))]">En constante formación en tecnologías de datos: Python, SQL, MongoDB, y herramientas de análisis.</p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{
          delay: 0.6
        }} className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">Objetivo</h3>
            <p className="text-[rgb(var(--text-secondary))]">Convertirme en un experto en ingeniería de datos y contribuir a proyectos innovadores.</p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;