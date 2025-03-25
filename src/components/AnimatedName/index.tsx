'use client';

import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

import React from 'react';

interface AnimatedNameProps {
  text: string;
}

const AnimatedName: React.FC<AnimatedNameProps> = ({ text }) => {
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-3xl text-center uppercase sm:text-4xl md:text-6xl md:leading-[4rem] tracking-widest"
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedName;
