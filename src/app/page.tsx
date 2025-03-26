'use client';

import Image from 'next/image';
import './page.css';
import Countdown from '@/components/Countdown';
import AnimatedName from '@/components/AnimatedName';
import DateAndTime from '@/components/DateAndTime';
import { motion } from 'motion/react';
import { createEvents } from 'ics';
import { saveAs } from 'file-saver';
import React from 'react';

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
      <section className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center">
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
      <section className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">Location</h1>
        <p className="text-justify">
          Sivakasi, often referred to as the
          <strong> Little Japan of India </strong>, is renowned for its thriving
          firecracker, matchbox, and printing industries. This vibrant town is
          not only an industrial hub but also a place of cultural significance,
          hosting numerous temples and festivals that attract visitors from all
          over.
        </p>
        <p className="text-justify">
          The wedding venue is located in the heart of Sivakasi, making it
          easily accessible and surrounded by the town&apos;s rich heritage and
          bustling energy.
        </p>
        <strong>
          <a
            href="https://maps.app.goo.gl/K7YxfEuAQjjzZBkr5"
            target="_blank"
            rel="noreferrer"
          >
            Master Printers Association Marraige hall, Sivakasi
          </a>
        </strong>
        {typeof window !== 'undefined' && (
          <iframe
            suppressHydrationWarning
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5734578895654!2d77.78965382555616!3d9.458748032112915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cefe0c7df8ad%3A0xcb12990c4a0df3ed!2sFQ5R%2BFRG%20Master%20Printers%20Association%20Marraige%20hall%2C%20Railway%20Feeder%20Rd%2C%20Parasakthi%20Colony%2C%20Sivakasi%2C%20Tamil%20Nadu%20626123!5e0!3m2!1sen!2sin!4v1742977915106!5m2!1sen!2sin"
            className="m-auto max-w-screen-xl"
            style={{ border: 0 }}
            width={`${Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 64}`}
            height={`${Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2 - 64}`}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </section>
      <section className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">Agenda</h1>
        <p className="text-justify">
          We are excited to have you join us for our special day. Here&apos;s a
          sneak peek at the events lined up for the celebration.
        </p>
        <ul className="text-justify">
          <li className="mb-4">
            <strong>Betrothal ceremony</strong> - 7th June 2025, 6:00 PM to 7:00
            PM
          </li>
          <li className="mb-4">
            <strong>Dj and Dance - Sangeeth</strong> - 7th June 2025, 9:00 PM to
            10:00 PM
          </li>
          <li className="mb-4">
            <strong>Mugurtham - Marriage</strong> - 8th June 2025, 7:00 AM to
            8:00 AM
          </li>
          <li className="mb-4">
            <strong>Reception</strong> - 9th June 2025, 6:00 PM to 7:00 PM
          </li>
        </ul>
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
        <button
          className="bg-(--color-foreground) text-(--color-background) p-2 rounded cursor-pointer font-semibold"
          onClick={() => {
            if (events.error) {
              return;
            }
            if (events.value) {
              const blob = new Blob([events.value], { type: 'text/calendar' });
              saveAs(blob, 'kishanandneave.ics');
            }
          }}
        >
          Download ics
        </button>
      </section>
      <footer className=""></footer>
    </main>
  );
}
