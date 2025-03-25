'use client';

import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

import React from 'react';

interface DateAndTimeProps {
  text: string;
}

const DateAndTime: React.FC<DateAndTimeProps> = ({ text }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      exit="hidden"
      transition={{ duration: 0.5, delay: 1.5 }}
      className="uppercase tracking-widest"
    >
      {text}
    </motion.p>
  );
};

export default DateAndTime;
