'use client';

import Image from 'next/image';
import './page.css';
import Countdown from '@/components/Countdown';
import AnimatedName from '@/components/AnimatedName';
import DateAndTime from '@/components/DateAndTime';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main>
      <header></header>
      <div className="grid place-items-center top-0 left-0 right-0 bottom-0 fixed opacity-10 translate-x-1/2 z-0">
        <div className="spin-animation">
          <Image
            src="/23823002.png"
            alt="Next.js logo"
            width={512}
            height={512}
            priority
          />
        </div>
      </div>
      <section className="min-h-dvh p-8 gap-8 flex flex-col justify-center items-center">
        <AnimatedName text="Kishan & Neave" />
        <Countdown targetDate={'2025-06-07T18:30:00.000Z'} />
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
            width={512}
            height={256}
            priority
          />
        </motion.div>
      </section>
      {/* <section className="min-h-dvh p-8 gap-8 flex flex-col justify-center items-center"></section> */}
      <footer className=""></footer>
    </main>
  );
}
