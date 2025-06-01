'use client';

import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  Variants,
} from 'motion/react';
import React, { useState, useEffect } from 'react';
import { DURATION } from '@/constants';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';

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
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);
      if (timeLeft) {
        setTimeLeft(timeLeft);
        setShowConfetti(false);
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setShowConfetti(true);
        clearInterval(timer);
      }
    }, 10);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft || Object.values(timeLeft).every((value) => value === 0)) {
    return (
      <>
        {showConfetti && (
          <ReactConfetti
            width={width}
            height={height}
            numberOfPieces={500}
            wind={0.01}
            gravity={0.05}
            recycle={false}
          />
        )}
        <motion.div
          className="text-2xl min-h-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        >
          <span className="font-bold text-2xl bg-gradient-to-r from-[#27596c] via-[#1e4a57] to-[#27596c] bg-clip-text text-transparent animate-pulse">
            are married now!
          </span>
        </motion.div>
      </>
    );
  }

  return (
    <div className="flex gap-4 min-h-[48px]">
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
