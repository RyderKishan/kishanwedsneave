'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';
import { DELAY, DURATION } from '@/constants';

const PlacesToVisit = [
  {
    title: 'Srivilliputhur Andal Temple',
    description: 'A historic and divine temple dedicated to Goddess Andal.',
  },
  {
    title: 'Ayyanar Falls',
    description:
      'A serene and picturesque waterfall, perfect for a peaceful retreat.',
  },
  {
    title: 'Kullur Sandhai Reservoir',
    description: 'A scenic spot ideal for nature lovers.',
  },
  {
    title: 'Meenakshi Amman Temple (Madurai)',
    description:
      "One of India's most iconic temples, known for its magnificent architecture.",
  },
  {
    title: 'Rameshwaram',
    description:
      'A sacred pilgrimage site with breathtaking coastal beauty and the famous Ramanathaswamy Temple.',
  },
  {
    title: 'Kanyakumari',
    description:
      'Experience the spectacular sunrise and sunset at India’s southernmost tip.',
  },
  {
    title: 'Kodaikanal',
    description: 'A serene hill station, perfect for a refreshing getaway.',
  },
];

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const MarriageLocation: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center"
    >
      {isInView && (
        <>
          <motion.h1
            {...getAnimationProps(0)}
            className="text-4xl font-bold text-center"
          >
            Marriage Location
          </motion.h1>
          <motion.p {...getAnimationProps(1)} className="text-justify">
            Sivakasi, often referred to as the
            <strong> Little Japan of India </strong>, is renowned for its
            thriving firecracker, matchbox, and printing industries. This
            vibrant town is not only an industrial hub but also a place of
            cultural significance, hosting numerous temples and festivals that
            attract visitors from all over.
          </motion.p>
          <motion.p {...getAnimationProps(2)} className="text-justify">
            The wedding venue is located in the heart of Sivakasi, making it
            easily accessible and surrounded by the town&apos;s rich heritage
            and bustling energy.
          </motion.p>
          <motion.strong {...getAnimationProps(3)}>
            <a
              href="https://maps.app.goo.gl/K7YxfEuAQjjzZBkr5"
              target="_blank"
              rel="noreferrer"
            >
              Master Printers Association Marraige hall, Sivakasi
            </a>
          </motion.strong>
          {typeof window !== 'undefined' && (
            <motion.iframe
              {...getAnimationProps(4)}
              suppressHydrationWarning
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5734578895654!2d77.78965382555616!3d9.458748032112915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cefe0c7df8ad%3A0xcb12990c4a0df3ed!2sFQ5R%2BFRG%20Master%20Printers%20Association%20Marraige%20hall%2C%20Railway%20Feeder%20Rd%2C%20Parasakthi%20Colony%2C%20Sivakasi%2C%20Tamil%20Nadu%20626123!5e0!3m2!1sen!2sin!4v1742977915106!5m2!1sen!2sin"
              className="m-auto max-w-screen-xl"
              style={{ border: 0 }}
              width={`${Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 64}`}
              height={`${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2 - 64}`}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          <motion.h2
            {...getAnimationProps(5)}
            className="font-bold text-center"
          >
            Places to visit nearby
          </motion.h2>
          <motion.ul className="text-justify">
            {PlacesToVisit.map((item, i) => (
              <motion.li
                className="mb-4"
                key={`${i}-${item.title}`}
                {...getAnimationProps(6 + i)}
              >
                <strong>{item.title}</strong> – {item.description}
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </motion.section>
  );
};

export default MarriageLocation;
