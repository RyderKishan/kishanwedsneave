'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';
import { DELAY, DURATION } from '@/constants';

const PlacesToVisit = [
  {
    title: 'Sri Ranganathaswamy Temple',
    description:
      'One of the largest temple complexes in India, dedicated to Lord Vishnu.',
  },
  {
    title: 'Jambukeswarar Temple (Thiruvanaikaval)',
    description: 'A significant Shiva temple representing the water element.',
  },
  {
    title: 'Rock Fort Temple (Uchi Pillayar Temple)',
    description:
      'A famous temple atop a rock, offering stunning views of Trichy city.',
  },
  {
    title: 'Mukkombu (Upper Anaicut)',
    description: 'A scenic picnic spot along the Kaveri River.',
  },
  {
    title: 'Samayapuram Mariamman Temple',
    description: 'A powerful and famous temple dedicated to Goddess Mariamman.',
  },
  {
    title: 'Vekkali Amman Temple',
    description:
      'A unique temple without a roof, symbolizing the goddess protecting her devotees.',
  },
];

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const ReceptionLocation: React.FC = () => {
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
            Reception Location
          </motion.h1>
          <motion.p {...getAnimationProps(1)} className="text-justify">
            Srirangam, a prominent pilgrimage destination, is an island town
            located within Trichy. It is home to the famous Sri Ranganathaswamy
            Temple, one of the largest functioning Hindu temples in the world.
            The temple is a masterpiece of Dravidian architecture and attracts
            devotees and tourists from across the globe. Srirangam&apos;s serene
            environment, combined with its spiritual significance, makes it a
            perfect location for a memorable celebration.
          </motion.p>
          <motion.strong {...getAnimationProps(2)}>
            <a
              href="https://maps.app.goo.gl/HvUbeE3exYX8eHyt9"
              target="_blank"
              rel="noreferrer"
            >
              V G Mahal, Srirangam, Trichy
            </a>
          </motion.strong>
          {typeof window !== 'undefined' && (
            <motion.iframe
              {...getAnimationProps(3)}
              suppressHydrationWarning
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5101350632517!2d78.68703047667728!3d10.848750489304395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ee6313a4d%3A0xd292c7e2702f1dee!2sV%20G%20Mahal!5e0!3m2!1sen!2sin!4v1742995268081!5m2!1sen!2sin"
              className="m-auto max-w-screen-xl"
              style={{ border: 0 }}
              width={`${Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 64}`}
              height={`${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2 - 64}`}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></motion.iframe>
          )}
          <motion.h2
            {...getAnimationProps(4)}
            className="font-bold text-center"
          >
            Places to visit nearby
          </motion.h2>
          <motion.ul className="text-justify">
            {PlacesToVisit.map((item, i) => (
              <motion.li
                className="mb-4"
                key={`${i}-${item.title}`}
                {...getAnimationProps(5 + i)}
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

export default ReceptionLocation;
