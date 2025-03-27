'use client';

import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Variants,
} from 'motion/react';
import React, { useState, useEffect } from 'react';

// const DELAY = 0.2;
const DURATION = 0.3;

const initial: TargetAndTransition = {
  opacity: 0,
  filter: 'blur(20px)',
};

const animate: TargetAndTransition = {
  opacity: 1,
  filter: 'blur(0px)',
};

const commonProps = {
  suppressHydrationWarning: true,
  initial,
  className:
    'w-12 h-12 flex justify-center items-center rounded-xl bg-(--foreground) text-(--background)',
  animate,
};

const modalVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.8,
    transition: { duration: DURATION },
  },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION } },
  exit: { opacity: 0, y: -10, scale: 0.8, transition: { duration: DURATION } },
};

interface CountdownProps {
  targetDate: string;
}

const calculateTimeLeft = (targetDate: string) => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return null;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);
      if (timeLeft) setTimeLeft(timeLeft);
      else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(timer);
      }
    }, 10);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-2xl">Happening now!</div>;
  }

  return (
    <div className="flex gap-4">
      <motion.div {...commonProps} transition={{ delay: 0.2, duration: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`${timeLeft.days}`}
          >
            {timeLeft.days}
          </motion.span>
        </AnimatePresence>
        <span className="ml-0.5">D</span>
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.4, duration: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`${timeLeft.days}-${timeLeft.hours}`}
          >
            {timeLeft.hours}
          </motion.span>
        </AnimatePresence>
        <span className="ml-0.5">H</span>
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.6, duration: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`${timeLeft.hours}-${timeLeft.minutes}`}
          >
            {timeLeft.minutes}
          </motion.span>
        </AnimatePresence>
        <span className="ml-0.5">M</span>
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.8, duration: 1 }}>
        <AnimatePresence mode="wait">
          <motion.span
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`${timeLeft.minutes}-${timeLeft.seconds}`}
          >
            {timeLeft.seconds}
          </motion.span>
        </AnimatePresence>
        <span className="ml-0.5">S</span>
      </motion.div>
    </div>
  );
};

export default Countdown;
