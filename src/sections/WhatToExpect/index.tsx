'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';
import { DELAY, DURATION } from '@/constants';
import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const WhatToExpect: React.FC = () => {
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
          <motion.h2
            {...getAnimationProps(0)}
            className="text-3xl font-bold text-center"
          >
            What To Expect
          </motion.h2>
          <motion.p {...getAnimationProps(1)} className="text-lg text-center">
            We are so excited to celebrate our wedding with you! Here’s what you
            can expect:
          </motion.p>
          <motion.ul
            {...getAnimationProps(2)}
            className="text-lg text-center list-disc list-inside"
          >
            <li>Fun and laughter</li>
            <li>Food and drinks</li>
            <li>Music and dancing</li>
            <li>Memories to cherish forever</li>
          </motion.ul>
          <motion.p {...getAnimationProps(3)} className="text-lg text-center">
            We can’t wait to celebrate this special day with you and create
            beautiful memories together. Thank you for being a part of our
            journey!
          </motion.p>
          <motion.p {...getAnimationProps(4)} className="text-lg text-center">
            P.S. Don&apos;t forget to bring your dancing shoes!
          </motion.p>
          <motion.p {...getAnimationProps(5)} className="text-lg text-center">
            With love,
          </motion.p>
          <motion.p {...getAnimationProps(6)} className="text-lg text-center">
            <strong>Kishan & Neave</strong>
          </motion.p>
          <motion.p className="flex gap-8 mt-10">
            <a
              href="https://www.instagram.com/ryder_kishan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--foreground) hover:text-(--hover-foreground) font-semibold flex gap-2 items-center"
            >
              <InstagramLogoIcon />
              Instagram
            </a>
            &nbsp;
            <a
              href="https://www.balkishan.co.in?source=TWFycmlhZ2UgSW52aXRl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--foreground) hover:text-(--hover-foreground) font-semibold flex gap-2 items-center"
            >
              <ExternalLinkIcon />
              Portfolio Site
            </a>
            &nbsp;
            <a
              href="https://github.com/RyderKishan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--foreground) hover:text-(--hover-foreground) font-semibold flex gap-2 items-center"
            >
              <GitHubLogoIcon />
              Github
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/balkishan-sembulingam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--foreground) hover:text-(--hover-foreground) font-semibold flex gap-2 items-center"
            >
              <LinkedInLogoIcon />
              LinkedIn
            </a>
          </motion.p>
        </>
      )}
    </motion.section>
  );
};

export default WhatToExpect;
