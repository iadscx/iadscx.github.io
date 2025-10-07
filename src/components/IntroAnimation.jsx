import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor } from 'lucide-react';

const OilDrop = ({ x, onComplete }) => (
  <motion.div
    className="absolute w-2 h-4 bg-gradient-to-b from-yellow-700 to-black rounded-full"
    style={{ left: x, bottom: '25%', originY: 1 }}
    initial={{ scaleY: 0, opacity: 0 }}
    animate={{ 
        y: [0, -10, -15, -100], 
        scaleY: [0, 1, 0.8, 0.5],
        opacity: [0, 1, 1, 0] 
    }}
    transition={{ duration: 1.2, ease: "easeOut", times: [0, 0.2, 0.4, 1] }}
    onAnimationComplete={onComplete}
  />
);

const OffshoreRig = ({ x }) => (
  <motion.div
    className="absolute bottom-0 w-48 h-48 text-gray-400"
    style={{ left: x }}
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 200, opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="relative w-full h-full">
        {/* Base */}
        <div className="absolute bottom-10 w-full h-4 bg-gray-600"></div>
        <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-black to-transparent z-10"></div>
        {/* Legs */}
        <div className="absolute bottom-10 left-4 w-4 h-12 bg-gray-500 -skew-x-12"></div>
        <div className="absolute bottom-10 right-4 w-4 h-12 bg-gray-500 skew-x-12"></div>
        {/* Tower */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-8 h-24 bg-gray-500"></div>
        <Anchor className="absolute bottom-24 left-1/2 -translate-x-1/2 w-16 h-16 text-gray-400 transform -rotate-90" />
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
    
    setRigs([{ id: 1, x: '15%' }, { id: 2, x: '65%' }]);

    setTimeout(() => {
        let dropCount = 0;
        const interval = setInterval(() => {
            if(dropCount < 40) {
                createDrop('22%');
                createDrop('72%');
                dropCount += 2;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }, 500);

    setTimeout(() => {
        setRigs([]);
    }, 3000);
    setTimeout(onFinish, 4000);
  }, [start, onFinish]);

  const createDrop = (x) => {
    setDrops(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        x: `calc(${x} + ${Math.random() * 2 - 1}rem)`,
      }
    ]);
  };

  const removeDrop = (id) => {
    setDrops(prev => prev.filter(d => d.id !== id));
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
            <p className="text-gradient-gold" style={{fontFamily: "'Playfair Display', serif"}}>Adam Diaz</p>
            <p className="text-lg text-gray-400 mt-2">Mueve el mouse o haz clic para comenzar</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <AnimatePresence>
        {rigs.map(rig => <OffshoreRig key={rig.id} x={rig.x} />)}
      </AnimatePresence>

      {drops.map(drop => (
        <OilDrop key={drop.id} {...drop} onComplete={() => removeDrop(drop.id)} />
      ))}
    </motion.div>
  );
};

export default IntroAnimation;