'use client';

import React from 'react';
import Mailgun from 'mailgun.js';
import { XCustomDataType } from '@/types';
import { getVisitHtml } from '@/helpers';
import axios from 'axios';

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

type ProviderProps = {
  xCustomData: XCustomDataType;
};

const Provider: React.FC<ProviderProps> = ({ xCustomData }) => {
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined')
      return;
    if (
      process.env.NODE_ENV === 'production' &&
      localStorage.getItem('kwn:emailSent')
    )
      return;
    const html = getVisitHtml(xCustomData);
    if (process.env.NODE_ENV === 'production') {
      mg.messages
        .create(MAILGUN_DOMAIN, {
          from: `Wedding Bot <mailgun@${MAILGUN_DOMAIN}>`,
          to: [MAIL_TO],
          subject: xCustomData.source
            ? `Invitation viewed by ${xCustomData.source}`
            : 'Invitation viewed',
          html,
        })
        .then(() => {
          localStorage.setItem('kwn:emailSent', 'true');
        });
    } else {
      axios
        .post(
          'https://webhook.site/1fa91e38-131f-4ecc-86b2-033853964371',
          xCustomData,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Provider;
