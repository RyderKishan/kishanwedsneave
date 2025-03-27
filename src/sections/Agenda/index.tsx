'use client';

import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import { AnimationProps, motion, useInView } from 'motion/react';
import { createEvents } from 'ics';

const DELAY = 0.2;
const DURATION = 0.15;

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const events = createEvents([
  {
    start: [2025, 6, 7, 18, 0],
    end: [2025, 6, 7, 19, 0],
    title: 'Betrothal ceremony',
    geo: {
      lat: 9.4588633,
      lon: 77.7920847,
    },
    description: '',
    location: 'Master Printers Association Marraige hall, Sivakasi',
    url: 'https://kishanandneave.com',
    organizer: {
      name: 'Balkishan',
      email: 'kishan020696@gmail.com',
    },
    startInputType: 'local',
    endInputType: 'local',
  },
  {
    start: [2025, 6, 7, 21, 0],
    end: [2025, 6, 7, 22, 0],
    title: 'Dj and Dance - Sangeeth',
    geo: {
      lat: 9.4588633,
      lon: 77.7920847,
    },
    description: '',
    location: 'Master Printers Association Marraige hall, Sivakasi',
    url: 'https://kishanandneave.com',
    organizer: {
      name: 'Balkishan',
      email: 'kishan020696@gmail.com',
    },
    startInputType: 'local',
    endInputType: 'local',
  },
  {
    start: [2025, 6, 8, 7, 0],
    end: [2025, 6, 8, 8, 0],
    title: 'Mugurtham - Marriage',
    geo: {
      lat: 9.4588633,
      lon: 77.7920847,
    },
    description: '',
    location: 'Master Printers Association Marraige hall, Sivakasi',
    url: 'https://kishanandneave.com',
    organizer: {
      name: 'Balkishan',
      email: 'kishan020696@gmail.com',
    },
    startInputType: 'local',
    endInputType: 'local',
  },
  {
    start: [2025, 6, 9, 18, 0],
    end: [2025, 6, 9, 19, 0],
    title: 'Reception',
    geo: {
      lat: 10.8487558,
      lon: 78.6870305,
    },
    description: '',
    location: 'V G Mahal, Srirangam, Trichy',
    url: 'https://kishanandneave.com',
    organizer: {
      name: 'Balkishan',
      email: 'kishan020696@gmail.com',
    },
    startInputType: 'local',
    endInputType: 'local',
  },
]);

const Agenda: React.FC = () => {
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
            Agenda
          </motion.h1>
          <motion.p {...getAnimationProps(1)} className="text-justify">
            We are excited to have you join us for our special day. Here&apos;s
            a sneak peek at the events lined up for the celebration.
          </motion.p>
          <motion.ul {...getAnimationProps(2)} className="text-justify">
            <li className="mb-4">
              <strong>Betrothal ceremony</strong> - 7th June 2025, 6:00 PM to
              7:00 PM
            </li>
            <li className="mb-4">
              <strong>Dj and Dance - Sangeeth</strong> - 7th June 2025, 9:00 PM
              to 10:00 PM
            </li>
            <li className="mb-4">
              <strong>Mugurtham - Marriage</strong> - 8th June 2025, 7:00 AM to
              8:00 AM
            </li>
            <li className="mb-4">
              <strong>Reception</strong> - 9th June 2025, 6:00 PM to 7:00 PM
            </li>
          </motion.ul>
          {typeof window !== 'undefined' && (
            <iframe
              suppressHydrationWarning
              className="m-auto max-w-screen-xl"
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&showCalendars=0&title=Kishan%20%26%20Neave%20Wedding&src=MzU5OWM0NGI5OTdlMWJhMWU0NWVlZjQ2ODQyZDJiMTIzMjRhNTFiYTNkYzEwOGZmYzVhNzQyNGRkNGFlODI2OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
              style={{ border: 0 }}
              width={`${Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 64}`}
              height={`${
                Math.max(
                  document.documentElement.clientHeight || 0,
                  window.innerHeight || 0,
                ) /
                  2 -
                64
              }`}
            ></iframe>
          )}
          <motion.button
            {...getAnimationProps(3)}
            className="bg-(--color-foreground) text-(--color-background) p-2 rounded cursor-pointer font-semibold"
            onClick={() => {
              if (events.error) {
                return;
              }
              if (events.value) {
                const blob = new Blob([events.value], {
                  type: 'text/calendar',
                });
                saveAs(blob, 'kishanandneave.ics');
              }
            }}
          >
            Download ics
          </motion.button>
        </>
      )}
    </motion.section>
  );
};

export default Agenda;
