'use client';

import { motion, TargetAndTransition } from 'motion/react';
import React, { useState, useEffect } from 'react';

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
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-2xl">Happening now!</div>;
  }

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
      'w-12 h-12 flex justify-center font-extrabold items-center rounded-xl bg-(--color-foreground) text-(--color-background)',
    animate,
  };

  return (
    <div className="flex gap-4">
      <motion.div {...commonProps} transition={{ delay: 0.2, duration: 1 }}>
        {`${timeLeft.days} D`}
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.4, duration: 1 }}>
        {`${timeLeft.hours} H`}
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.6, duration: 1 }}>
        {`${timeLeft.minutes} M`}
      </motion.div>
      <motion.div {...commonProps} transition={{ delay: 0.8, duration: 1 }}>
        {`${timeLeft.seconds} S`}
      </motion.div>
    </div>
  );
};

export default Countdown;
