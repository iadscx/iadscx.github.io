import React, { useState, useEffect, useCallback } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';

const OilDrop = ({ x, onComplete }) => (
  <motion.div
    className="absolute w-2 h-4 bg-gradient-to-b from-yellow-700 to-black rounded-full"
    style={{ left: x, bottom: '80%', originY: 1 }}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{
      y: [0, -10, -15, -100],
      scaleY: [0, 1, 0.8, 0.5],
      opacity: [0, 1, 1, 0],
    }}
    transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.2, 0.4, 1] }}
    onAnimationComplete={onComplete}
  />
);

const OilDrop2 = ({ x, onComplete }) => (
  <motion.div
    className="absolute w-2 h-4 bg-gradient-to-b from-yellow-700 to-black rounded-full"
    style={{ left: x, bottom: '50%', originY: 1 }}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{
      y: [0, -10, -15, -100],
      scaleY: [0, 1, 0.8, 0.5],
      opacity: [0, 1, 1, 0],
    }}
    transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.2, 0.4, 1] }}
    onAnimationComplete={onComplete}
  />
);

// Torre de perforación con imagen
const DrillingRig = ({ x }) => (
  <motion.div
    className="absolute bottom-1 w-64 h-112" // Tamaño aumentado
    style={{ left: x }}
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 200, opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="relative w-full h-full">
      {/* Usamos la imagen de la torre de perforación */}
      <img
        src="/images/TorrePerf.png"
        alt="Torre Petrolera"
        className="w-full h-full object-contain"
        style={{
          filter: 'brightness(1.5) grayscale(50%)', // Filtro de brillo y desaturación
        }}
      />
    </div>
  </motion.div>
);

// Barco perforador con imagen
const DrillingShip = ({ x }) => (
  <motion.div
    className="absolute bottom-0 w-160 h-128" // Tamaño aumentado
    style={{ left: x }}
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 200, opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="relative w-full h-full">
      {/* Usamos la imagen del barco perforador */}
      <img
        src="/images/PlataformaPerf.png"
        alt="Barco Perforador"
        className="w-full h-full object-contain"
        style={{
          filter: 'brightness(3.5) grayscale(90%)', // Filtro de brillo y desaturación
        }}
      />
    </div>
  </motion.div>
);

const IntroAnimation = ({ onFinish }) => {
  const [start, setStart] = useState(false);
  const [showText, setShowText] = useState(true);
  const [drops, setDrops] = useState([]);
  const [rigs, setRigs] = useState([]);

  const handleInteraction = useCallback(() => {
    if (start) return;
    setStart(true);
    setShowText(false);

    // Inicializar las plataformas (torres o barcos)
    setRigs([{ id: 1, x: '15%' }, { id: 2, x: '35%' }]);

    setTimeout(() => {
      let dropCount = 0;
      const interval = setInterval(() => {
        if (dropCount < 40) {
          // Crear gotas de petróleo en las posiciones de las plataformas
          createDrop('23%');
          createDrop('54%');
          dropCount += 2;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, 500);

    setTimeout(() => {
      setRigs([]); // Eliminar plataformas después de 3 segundos
    }, 3000);
    setTimeout(onFinish, 4000); // Finaliza la animación después de 4 segundos
  }, [start, onFinish]);

  // Crear gotas de petróleo en posiciones específicas
  const createDrop = (x) => {
    setDrops((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: `calc(${x} + ${Math.random() * 2 - 1}rem)`, // Le damos un pequeño desplazamiento aleatorio
      },
    ]);
  };

  // Eliminar gotas de petróleo cuando la animación de caída termina
  const removeDrop = (id) => {
    setDrops((prev) => prev.filter((d) => d.id !== id));
  };

  useEffect(() => {
    const memoizedInteraction = handleInteraction;
    window.addEventListener('mousemove', memoizedInteraction, { once: true });
    window.addEventListener('click', memoizedInteraction, { once: true });
    return () => {
      window.removeEventListener('mousemove', memoizedInteraction);
      window.removeEventListener('click', memoizedInteraction);
    };
  }, [handleInteraction]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {showText && (
          <motion.div
            className="text-white text-2xl md:text-4xl font-semibold text-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Irvin Diaz
            </p>
            <p className="text-lg text-gray-400 mt-2">Mueve el mouse o clickea para comenzar C:</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <AnimatePresence>
        {rigs.map((rig) => rig.id === 1 ? <DrillingRig key={rig.id} x={rig.x} /> : <DrillingShip key={rig.id} x={rig.x} />)}
      </AnimatePresence>

      {/* Renderizar las gotas de petróleo */}
      {drops.map((drop) => (
        <OilDrop key={drop.id} {...drop} onComplete={() => removeDrop(drop.id)} />
      ))}
    </motion.div>
  );
};

export default IntroAnimation;
