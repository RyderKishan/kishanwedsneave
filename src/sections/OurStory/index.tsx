'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const OurStory: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-center">Our story</h1>
      <p>
        <strong>Once upon a time...</strong>
      </p>
    </motion.section>
  );
};

export default OurStory;
