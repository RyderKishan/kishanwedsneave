import React from 'react';
import Main from '@/sections/Main';
import OurStory from '@/sections/OurStory';
import Agenda from '@/sections/Agenda';
import MarriageLocation from '@/sections/MarriageLocation';
import ReceptionLocation from '@/sections/ReceptionLocation';
import AnimatedSpinner from '@/components/AnimatedSpinner';
import './page.css';

export default function Home() {
  return (
    <main>
      <header></header>
      <div
        style={{ width: 'var(--scroll)' }}
        className="bg-(--color-foreground) h-1 fixed top-0 full z-2 transition-all duration-300"
      ></div>
      <AnimatedSpinner />
      <Main />
      <OurStory />
      <Agenda />
      <MarriageLocation />
      <ReceptionLocation />
      <footer className=""></footer>
    </main>
  );
}
