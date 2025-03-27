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
import { getHtml } from '@/helpers';
import Mailgun from 'mailgun.js';
import { MessagesSendResult } from 'mailgun.js/definitions';

export const dynamic = 'force-dynamic';

const {
  MAILGUN_DOMAIN = 'MAILGUN_DOMAIN',
  MAILGUN_AUTH = 'MAILGUN_AUTH',
  MAIL_TO = 'MAIL_TO',
} = process.env;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_AUTH,
});

const processRequest = async (headersList: ReadonlyHeaders) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  const xCustomDataString = headersList.get('x-custom-data');
  const xCustomData: XCustomDataType = JSON.parse(xCustomDataString ?? '{}');
  if (xCustomData.ip) {
    const response = await fetch(
      `https://api.ipdata.co/${xCustomData.ip}?api-key=${process.env.IP_DATA_API_KEY}`,
    );
    const ipData: IpDataType = await response.json();
    xCustomData.ipData = ipData;
  }
  const html = getHtml(xCustomData);
  const response: MessagesSendResult = await mg.messages.create(
    MAILGUN_DOMAIN,
    {
      from: `Wedding Bot <mailgun@${MAILGUN_DOMAIN}>`,
      to: [MAIL_TO],
      subject: `Invitation viewed by ${xCustomData.source}`,
      html,
    },
  );
  return response;
};

export default async function Home() {
  const headersList = await headers();
  await processRequest(headersList);

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
      <HowToReach />
      <footer className=""></footer>
    </main>
  );
}
