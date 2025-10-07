import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Linkedin, Send } from 'lucide-react';
const Hero = ({
  theme
}) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const openWhatsApp = () => {
    const phone = '+525547366385';
    const message = encodeURIComponent("¡Hola Irvin! Vi tu portafolio y me gustaría contactarte.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/iadscx', '_blank'); // Replace with actual LinkedIn profile
  };
  const backgroundImageUrl = theme === 'light' ? 'https://olmeca.edu.mx/wp-content/uploads/2024/05/Ingenieria-Petrolera-Geologia-y-Geofisica-Avanzada-transformed.jpeg' : 'https://img.freepik.com/fotos-premium/mar-adentro-noche-industria-produccion-petroleo-gas-oleoducto_478515-4919.jpg';
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
       <div className="absolute inset-0 z-0">
         <motion.div key={theme} className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }} initial={{
        opacity: 0
      }} animate={{
        opacity: 0.2
      }} transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--background-start))] via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-900/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-800/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-[rgb(var(--text-primary))]">“Los datos son el nuevo petróleo y al igual que el fósil, sin ingeniería, no tienen el valor final.”</span>
          </div>
        </motion.div>

         <motion.h2 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-4xl md:text-5xl font-bold mb-2 font-serif text-gradient-gold" style={{
        fontFamily: "'Playfair Display', serif"
      }}>Irvin Adan Diaz Salinas</motion.h2>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          <span className="text-gradient">Ingeniero de Datos</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-xl md:text-2xl text-[rgb(var(--text-secondary))] mb-10">De la Ingeniería Petrolera al Mundo de los Datos</motion.p>
        
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={openWhatsApp} className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Send className="w-5 h-5" />
            Contáctame
          </button>
           <button onClick={openLinkedIn} className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </button>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1.2
      }} className="absolute -bottom-20 md:-bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToAbout}>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <ChevronDown className="w-10 h-10 text-[rgb(var(--text-secondary))]" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;