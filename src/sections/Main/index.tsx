'use client';

import AnimatedName from '@/components/AnimatedName';
import Countdown from '@/components/Countdown';
import DateAndTime from '@/components/DateAndTime';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import RsvpForm from '@/components/RsvpForm';

const Main: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center"
    >
      <AnimatedName text="Kishan & Neave" />
      <Countdown targetDate={'2025-06-08T02:30:00.000Z'} />
      <DateAndTime text="8th June 2025, Sivakasi" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <Image
          src="/24818477.png"
          alt="Next.js logo"
          width={256}
          height={256}
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
      >
        <Image
          src="/7120263.png"
          alt="Next.js logo"
          width={256}
          height={128}
          priority
        />
      </motion.div>
      <RsvpForm />
    </motion.section>
  );
};

export default Main;
