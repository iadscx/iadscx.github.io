import React from 'react';
import { motion } from 'framer-motion';
import { Building, GraduationCap, HardHat } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const Experience = () => {
  const timeline = [
    {
      icon: GraduationCap,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      date: '2016 - 2021',
      title: 'Ingeniería Petrolera, UNAM',
      description: 'Graduado de la Facultad de Ingeniería de la Universidad Nacional Autónoma de México, con enfoque en yacimientos y producción.',
    },
    {
      icon: Building,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      date: '2021 - 2022',
      title: 'Prácticas Profesionales en Campo',
      description: 'Experiencia práctica en operaciones de campo, análisis de datos de perforación y optimización de producción.',
    },
    {
      icon: HardHat,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      date: '2023 - Presente',
      title: 'Transición a Ingeniería de Datos',
      description: 'Desarrollo de proyectos personales y capacitación autodidacta en Python, SQL, y herramientas de BI para análisis de datos a gran escala.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Educación y Experiencia" subtitle="Mi trayectoria profesional y académica" />
        
        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-white/20 -translate-x-1/2"></div>
          
          {timeline.map((event, index) => {
            const Icon = event.icon;
            const isOdd = index % 2 !== 0;
            return (
              <motion.div key={index} className="relative mb-12" variants={item}>
                <div className={`md:flex ${isOdd ? 'flex-row-reverse' : ''} items-center`}>
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isOdd ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-effect p-6 rounded-lg">
                      <p className={`text-sm font-semibold mb-1 ${event.color}`}>{event.date}</p>
                      <h3 className="text-xl font-bold mb-2 text-[rgb(var(--text-primary))]">{event.title}</h3>
                      <p className="text-[rgb(var(--text-secondary))] text-base">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-12 h-12 rounded-full ${event.bgColor} flex items-center justify-center ring-4 ring-[rgb(var(--background-start))]`}>
                      <Icon className={`w-6 h-6 ${event.color}`} />
                    </div>
                  </div>

                  {/* Empty div for spacing on md+ */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;