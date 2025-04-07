import React from 'react';
import Main from '@/sections/Main';
import OurStory from '@/sections/OurStory';
import Agenda from '@/sections/Agenda';
import MarriageLocation from '@/sections/MarriageLocation';
import ReceptionLocation from '@/sections/ReceptionLocation';
import AnimatedSpinner from '@/components/AnimatedSpinner';
import './page.css';
import HowToReach from '@/sections/HowToReach';
import { headers } from 'next/headers';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { IpDataType, XCustomDataType } from '@/types';
import Provider from '@/sections/Provider';
import { IpDataMock } from '@/constants';
import PhotoGallery from '@/sections/PhotoGallery';

export const dynamic = 'force-dynamic';

const processRequest = async (headersList: ReadonlyHeaders) => {
  const xCustomDataString = headersList.get('x-custom-data');
  const xCustomData: XCustomDataType = JSON.parse(xCustomDataString ?? '{}');
  if (xCustomData.ip) {
    const response = await fetch(
      `https://api.ipdata.co/${xCustomData.ip}?api-key=${process.env.IP_DATA_API_KEY}`,
    );
    const ipData: IpDataType = await response.json();
    xCustomData.ipData = ipData;
  } else if (process.env.NODE_ENV !== 'production') {
    xCustomData.ipData = IpDataMock;
  }
  return xCustomData;
};

export default async function Home() {
  const headersList = await headers();
  const xCustomData = await processRequest(headersList);

  return (
    <main>
      <header></header>
      <div
        style={{ width: 'var(--scroll)' }}
        className="bg-(--foreground) h-1 fixed top-0 full z-2 transition-all duration-300"
      ></div>
      {xCustomData?.userAgent && <Provider xCustomData={xCustomData} />}
      <AnimatedSpinner />
      <Main />
      <OurStory />
      <Agenda />
      <MarriageLocation />
      <ReceptionLocation />
      <HowToReach />
      <PhotoGallery />
      <footer className=""></footer>
    </main>
  );
}
