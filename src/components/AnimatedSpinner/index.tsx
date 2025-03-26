'use client';

import React from 'react';
import Image from 'next/image';
import './index.css';
// import { throttle } from '@/utils';

interface AnimatedSpinnerProps {
  speed?: number;
}

const AnimatedSpinner: React.FC<AnimatedSpinnerProps> = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      ).toFixed(2);
      document.documentElement.style.setProperty(
        '--scroll',
        `${scrollPercentage}%`,
      );
    };
    // const throttledHandleScroll = throttle(handleScroll, 0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="grid place-items-center top-0 left-0 right-0 bottom-0 fixed opacity-10 translate-x-1/2 z-0">
      <div className="spin-animation">
        <Image
          src="/23823002.png"
          alt="Spinner"
          width={512}
          height={512}
          priority
        />
      </div>
    </div>
  );
};

export default AnimatedSpinner;
