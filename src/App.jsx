import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import IntroAnimation from '@/components/IntroAnimation';
import ThemeToggle from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import Interests from '@/components/Interests';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const handleIntroFinish = () => {
    setIntroFinished(true);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Helmet>
        <title>Adam Diaz - Portafolio Ingeniero de Datos</title>
        <meta name="description" content="Portafolio de Adam Diaz, ingeniero petrolero en transición a ingeniería y análisis de datos." />
      </Helmet>
      
      <AnimatePresence>
        {!introFinished && <IntroAnimation onFinish={handleIntroFinish} />}
      </AnimatePresence>

      <AnimatePresence>
      {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <main className="min-h-screen">
            <Hero theme={theme} />
            <About />
            <Interests />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;