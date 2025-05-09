'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'motion/react';
import Image from 'next/image';
import axios from 'axios';
import InView from '@/components/InView';
import { DELAY, DURATION } from '@/constants';
import { encode, shuffleArray } from '@/utils';
import { XCustomDataType } from '@/types';
import { getVisitHtml } from '@/helpers';

const LIST_OF_PHOTOS = [
  'IMG_001.jpg',
  'IMG_002.jpg',
  'IMG_003.jpg',
  'IMG_004.jpg',
  'IMG_005.jpg',
  'IMG_006.jpg',
  'IMG_007.jpg',
  'IMG_008.jpg',
  'IMG_009.jpg',
  'IMG_010.jpg',
  'IMG_011.jpg',
  'IMG_012.jpg',
  'IMG_013.jpg',
  'IMG_014.jpg',
  'IMG_015.jpg',
  'IMG_016.jpg',
  'IMG_017.jpg',
  'IMG_018.jpg',
  'IMG_019.jpg',
  'IMG_020.jpg',
  'IMG_021.jpg',
  'IMG_022.jpg',
  'IMG_023.jpg',
  'IMG_024.jpeg',
  'IMG_025.jpeg',
];

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

const sendEmail = (type: 'VIEW' | 'UPLOAD', xCustomData?: XCustomDataType) => {
  const html = getVisitHtml(xCustomData);
  if (process.env.NODE_ENV === 'production') {
    axios
      .post(
        '/api/v1/mail',
        {
          html: encode(html),
          subject:
            type === 'VIEW'
              ? `Photos link viewed by ${xCustomData?.source ?? 'System'}`
              : `Photo upload opened by ${xCustomData?.source ?? 'System'}`,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'x-api-key': encode(`${new Date().valueOf()}`),
          },
        },
      )
      .then(() => {
        localStorage.setItem('kwn:emailSent', 'true');
      })
      .catch(() => {});
  } else {
    axios
      .post(
        'https://webhook.site/1fa91e38-131f-4ecc-86b2-033853964371',
        {
          ...xCustomData,
          subject:
            type === 'VIEW'
              ? `Photos link viewed by ${xCustomData?.source ?? 'System'}`
              : `Photo upload opened by ${xCustomData?.source ?? 'System'}`,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
        },
      )
      .then(() => {
        localStorage.setItem('kwn:emailSent', 'true');
      })
      .catch(() => {});
  }
};

type PhotoGalleryProps = {
  xCustomData?: XCustomDataType;
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ xCustomData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const allPhotos = shuffleArray(LIST_OF_PHOTOS);
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
            Photo Gallery
          </motion.h2>
          <motion.p
            {...getAnimationProps(1)}
            className="text-justify leading-6"
          >
            Take a look at some of the beautiful moments we captured till now.
            From the stunning decorations to the heartfelt ceremonies, these
            photos will give you a glimpse into the love and joy that surrounded
            us on our special day. We are grateful to have shared these moments
            with our loved ones, and we hope these photos bring a smile to your
            face as you relive the memories with us.
          </motion.p>
          <motion.div className="flex gap-4 flex-wrap justify-center max-h-[45vh] overflow-auto">
            {allPhotos.map((photo, index) => (
              <InView key={index} index={index}>
                <Image
                  src={`/photos/${photo}`}
                  alt={`Photo ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </InView>
            ))}
          </motion.div>
          <motion.p
            {...getAnimationProps(1)}
            className="text-justify leading-6"
          >
            We are excited to share our wedding photos with you! You can view
            them by clicking on the link below. We hope you enjoy the memories
            as much as we do! If you have any photos from the wedding that you
            would like to share with us, please upload them using the link
            below. We would love to see your perspective of the day and add them
            to our collection. Thank you for being a part of our special day!
          </motion.p>
          <motion.div className="flex gap-4">
            <motion.button
              className="bg-(--foreground) hover:bg-(--hover-foreground) text-(--background) p-2 rounded cursor-pointer font-semibold flex gap-2 items-center"
              onClick={() => {
                sendEmail('VIEW', xCustomData);
                window.open(
                  'https://photos.app.goo.gl/gXc9dGvQtyRyaWAW7',
                  '_blank',
                );
              }}
            >
              View Photos
              <Image
                src="/google-photos.png"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </motion.button>
            <motion.button
              className="bg-(--foreground) hover:bg-(--hover-foreground) text-(--background) p-2 rounded cursor-pointer font-semibold flex gap-2 items-center"
              onClick={() => {
                sendEmail('UPLOAD', xCustomData);
                window.open(
                  'https://photos.app.goo.gl/BRXhji9y2mW37T5e9',
                  '_blank',
                );
              }}
            >
              Upload your photos
              <Image
                src="/google-photos.png"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </motion.button>
          </motion.div>
        </>
      )}
    </motion.section>
  );
};

export default PhotoGallery;
