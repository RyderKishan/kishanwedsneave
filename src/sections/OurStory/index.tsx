'use client';
import moment from 'moment';
import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';
import Image from 'next/image';
import './index.css';
import { DELAY, DURATION } from '@/constants';

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const OurStory: React.FC = () => {
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
          <motion.h1
            {...getAnimationProps(0)}
            className="text-4xl font-bold text-center"
          >
            Our story
          </motion.h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <motion.div
              {...getAnimationProps(1)}
              className="flex-1 flex flex-col gap-4"
            >
              <div className="flex justify-center">
                <Image
                  src="/profile2.jpg"
                  alt="Kishan"
                  width={200}
                  height={200}
                  className="rounded-full profile-image"
                />
              </div>
              <p className="leading-6">
                This is Kishan, from Sivakasi. Taking things positive is the
                best character of me. Spending{' '}
                {Math.floor(
                  moment
                    .duration(
                      moment(new Date()).diff(
                        new Date('1996-06-01T18:30:00.000Z'),
                      ),
                    )
                    .asYears(),
                )}{' '}
                years on earth and what i learnt is -
                <strong>Surival of the fittest!</strong>. Some phrases that help
                me living are - <strong>Time heals</strong>,{' '}
                <strong>இதுவும் கடந்து போகும்</strong>
              </p>
              <p className="leading-6">
                Born and brought up in a town - &quot;சிவகாசி (Sivakasi)&quot;
                in Tamil Nadu, (India). I have done my schooling there and moved
                to Coimbatore for my college. I did my B.E in Computer Science
                and Engineering at SKCT. I have been working in IT industry for
                the past{' '}
                {Math.floor(
                  moment
                    .duration(
                      moment(new Date()).diff(
                        new Date('2017-09-12T18:30:00.000Z'),
                      ),
                    )
                    .asYears(),
                )}{' '}
                years. My journey started with Mr.Cooper, then moved to
                Freshworks and now working in Apollo.io. Do visit my &nbsp;
                <a
                  href="https://www.balkishan.co.in?source=TWFycmlhZ2UgSW52aXRl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--foreground) hover:text-(--hover-foreground) font-semibold"
                >
                  Portfolio Site
                </a>
              </p>
              <p className="leading-6">
                I go crazy for cars. I love to travel and explore new places. I
                not a foodie and not a movie buff and i do not watch movies
                much. I love to play video games. Tech gadgets are my love. I am
                a die hard fan of Max Verstappen and Redbull Racing. I follow
                F1. Race weekends are my favourite.
              </p>
            </motion.div>
            <motion.div
              {...getAnimationProps(2)}
              className="flex-1 flex flex-col-reverse gap-4 md:flex-col"
            >
              <p className="leading-6">
                Hi, I’m Neave professional snack taster, part-time singer in the
                kitchen, and now, full-time partner to kishan. I finally found
                someone who laughs at my jokes (most of the time) and agreed to
                marry me—so here we are! Can’t wait to party with all of you!
              </p>
              <div className="flex justify-center mt-8">
                <Image
                  src="/profile1.jpg"
                  alt="Neave"
                  width={200}
                  height={200}
                  className="rounded-full profile-image"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default OurStory;
