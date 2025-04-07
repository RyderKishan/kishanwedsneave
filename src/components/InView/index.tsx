'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { DELAY, DURATION } from '@/constants';

interface InViewProps {
  children: React.ReactNode;
  index?: number;
}

const InView: React.FC<InViewProps> = ({ children, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ ease: 'easeIn', duration: DURATION, delay: DELAY * index }}
      className="min-h-[200px]"
    >
      {isInView && <>{children}</>}
    </motion.div>
  );
};

export default InView;
