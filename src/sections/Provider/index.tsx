'use client';

import React from 'react';
import { XCustomDataType } from '@/types';
import { getVisitHtml } from '@/helpers';
import axios from 'axios';
import { encode } from '@/utils';

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
      axios
        .post(
          '/api/v1/mail',
          {
            html: encode(html),
            subject: encode(
              xCustomData.source
                ? `Invitation viewed by ${xCustomData.source}`
                : 'Invitation viewed',
            ),
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
