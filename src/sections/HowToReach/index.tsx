'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';

const DELAY = 0.2;
const DURATION = 0.15;

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const HowToReach: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col items-center"
    >
      {isInView && (
        <>
          <div className="flex flex-col gap-8">
            <motion.h2
              {...getAnimationProps(0)}
              className="text-3xl font-bold text-center"
            >
              How to Reach Sivakasi
            </motion.h2>
            <motion.div
              {...getAnimationProps(1)}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-semibold">✈️ By Air:</h3>
              <p>Nearest airport:&nbsp;</p>
              <ul className="flex flex-col gap-4">
                <li>
                  📍&nbsp;
                  <a
                    href="https://maps.app.goo.gl/QaYMi2LivziUREti7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Madurai International Airport (IXM)
                  </a>
                  &nbsp;75 Kms - 1 Hr 15 Mins
                </li>
              </ul>
            </motion.div>
            <motion.div
              {...getAnimationProps(2)}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-semibold">
                🚄 By Train from Chennai:
              </h3>
              <p>Nearest railway stations</p>
              <ul className="flex flex-col gap-4">
                <li>
                  📍&nbsp;
                  <a
                    href="https://maps.app.goo.gl/C3EzpTFG9bwUqX5k6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Sivakasi Railway Station
                  </a>
                  &nbsp; (1 Km - 5 Mins)
                </li>
                <li>
                  📍&nbsp;
                  <a
                    href="https://maps.app.goo.gl/Do3jdQpRQfojZ72u6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Sattur Railway Station
                  </a>
                  &nbsp; (20 Km - 30 Mins)
                </li>
              </ul>
              <p>
                📅 Travel Date: <strong>June 6th, 2025</strong> (Reaching
                Sivakasi on June 7th Morning)
              </p>
              <p>
                📅 Booking Opens: <strong>April 7th, 2025</strong> (60 Days
                before)
              </p>
              <div>
                <h4 className="font-semibold my-4">
                  Option 1 - Direct Train from Chennai to Sivakasi
                </h4>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/12661/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (12661)
                    </a>
                    &nbsp; 🚆 POTHIGAI SF EXP &nbsp;🕰 20:10 | Chennai Egmore →
                    04:43 | Sivakasi
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold my-4">
                  Option 2 - Train from Chennai to Madurai
                </h4>
                <p className="my-2">
                  (Take a train to Madurai and then travel by taxi/bus to
                  Sivakasi)
                </p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/22671/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (22671)
                    </a>
                    &nbsp; 🚆 TEJAS EXPRESS &nbsp;🕰 06:00 | Chennai Egmore →
                    12:10 | Madurai Jn
                  </li>
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/12637/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (12637)
                    </a>
                    &nbsp; 🚆 PANDIAN SF EXP &nbsp;🕰 21:40 | Chennai Egmore →
                    05:25 | Madurai Jn
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold my-4">
                  Option 3 - Train from Chennai to Sattur
                </h4>
                <p className="my-2">
                  (Take a train to Sattur and then travel by taxi to Sivakasi)
                </p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/12693/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (12693)
                    </a>
                    &nbsp; 🚆 PEARL CITY EXP &nbsp;🕰 19:30 | Chennai Egmore →
                    04:08 | Sattur
                  </li>
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/20635/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (20635)
                    </a>
                    &nbsp; 🚆 ANANTAPURI EXP &nbsp;🕰 19:50 | Chennai Egmore →
                    04:28 | Sattur
                  </li>
                  <li>
                    <a
                      href="https://www.cleartrip.com/trains/12631/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      (12631)
                    </a>
                    &nbsp; 🚆 NELLAI SF EXP &nbsp;🕰 20:40 | Chennai Egmore →
                    04:58 | Sattur
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              {...getAnimationProps(3)}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-semibold">
                🛣️ By Road from Chennai:
              </h3>
              <p>
                🚗 540 Kms - 9 Hrs Drive -&nbsp;
                <a
                  href="https://maps.app.goo.gl/3VCt6vA7MrRPcEnE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Directions
                </a>
              </p>
              <p>Route: Chennai → Ulundurpet → Trichy → Madurai → Sivakasi</p>
            </motion.div>
            <motion.p {...getAnimationProps(4)}>
              We will make necessary arrangements for the taxi from airport.
            </motion.p>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default HowToReach;
