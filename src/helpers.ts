import moment from 'moment-timezone';
import get from 'lodash.get';
import { RsvpFormDataType, XCustomDataType } from './types';

const AllVisitFields = [
  {
    id: 'source',
    label: 'Source',
    path: 'source',
  },
  {
    id: 'ua',
    label: 'User Agent',
    path: 'userAgent.ua',
  },
  {
    id: 'isBot',
    label: 'Is Bot',
    path: 'userAgent.isBot',
  },
  {
    id: 'browserName',
    label: 'Browser Name',
    path: 'userAgent.browser.name',
  },
  {
    id: 'browserVersion',
    label: 'Browser Version',
    path: 'userAgent.browser.version',
  },
  {
    id: 'browserMajor',
    label: 'Browser Major Version',
    path: 'userAgent.browser.major',
  },
  {
    id: 'deviceModel',
    label: 'Device Model',
    path: 'userAgent.device.model',
  },
  {
    id: 'deviceType',
    label: 'Device Type',
    path: 'userAgent.device.type',
  },
  {
    id: 'deviceVendor',
    label: 'Device Vendor',
    path: 'userAgent.device.vendor',
  },
  {
    id: 'engineName',
    label: 'Engine Name',
    path: 'userAgent.engine.name',
  },
  {
    id: 'engineVersion',
    label: 'Engine Version',
    path: 'userAgent.engine.version',
  },
  {
    id: 'osName',
    label: 'OS Name',
    path: 'userAgent.os.name',
  },
  {
    id: 'osVersion',
    label: 'OS Version',
    path: 'userAgent.os.version',
  },
  {
    id: 'cpuArchitecture',
    label: 'CPU Architecture',
    path: 'userAgent.cpu.architecture',
  },
  {
    id: 'city',
    label: 'City',
    path: 'ipData.city',
  },
  {
    id: 'region',
    label: 'State',
    path: 'ipData.region',
  },
  {
    id: 'postal',
    label: 'Zip Code',
    path: 'ipData.postal',
  },
  {
    id: 'asn',
    label: 'Service Provider',
    path: 'ipData.asn.name',
  },
  {
    id: 'carrier',
    label: 'Carrier',
    path: 'ipData.carrier.name',
  },
  {
    id: 'count',
    label: 'Ip Data Count',
    path: 'ipData.count',
  },
];

const AllRsvpFields = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
  {
    id: 'pax',
    label: 'No of people',
  },
  {
    id: 'accNeeded',
    label: 'Accomodation Needed?',
  },
  {
    id: 'message',
    label: 'Additional message',
  },
];

export const getVisitHtml = (data?: XCustomDataType, title?: string) => {
  return `
    <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
            rel="stylesheet"
          />
          <title>Document</title>
          <style>
            table {
              font-family: Nunito, 'open sans', 'helvetica neue', sans-serif;
              color: #000;
              border-spacing: unset;
            }
          </style>
        </head>
        <body>
          <table
            style="
              background-color: #f6f6f6;
              margin: 0 auto;
              width: 600px;
              border-radius: 8px;
            "
          >
            <tbody>
              <tr>
                <td style="padding: 16px">
                  <table style="width: 100%">
                    <tbody>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 style="margin: 8px 0px;">${title ?? 'Details'}</h2>
                                  <div>
                                  ${moment(new Date().toISOString())
                                    .tz('Asia/Kolkata')
                                    .format('Do MMMM YYYY hh:mm a')}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align: right">
                          <a
                            href="https://www.google.co.in/maps/@${data?.ipData?.latitude ?? ''},${data?.ipData?.longitude ?? ''},14z"
                            target="_blank"
                          >
                            <span
                              style="
                                background-image: url(https://ssl.gstatic.com/gb/images/p1_c9bc74a1.png);
                                background-size: 64px 3100px;
                                background-position: 0 -483px;
                                display: inline-block;
                                height: 64px;
                                vertical-align: top;
                                width: 64px;
                              "
                            ></span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px">
                  <table class="data" style="border-spacing: 16px">
                    <tbody>
                      ${AllVisitFields.map((field) => {
                        const value = get(data, field.path);
                        return value
                          ? `
                            <tr id="${field.id}">
                              <td style="padding-right: 16px; white-space: nowrap">
                                <strong>${field.label}</strong>
                              </td>
                              <td>${value}</td>
                            </tr>
                          `
                          : '';
                      }).join('')}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
  `;
};

export const getRsvpHtml = (data?: RsvpFormDataType) => {
  return `
    <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
            rel="stylesheet"
          />
          <title>Document</title>
          <style>
            table {
              font-family: Nunito, 'open sans', 'helvetica neue', sans-serif;
              color: #000;
              border-spacing: unset;
            }
          </style>
        </head>
        <body>
          <table
            style="
              background-color: #f6f6f6;
              margin: 0 auto;
              width: 600px;
              border-radius: 8px;
            "
          >
            <tbody>
              <tr>
                <td style="padding: 16px">
                  <table style="width: 100%">
                    <tbody>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <h2 style="margin: 8px 0px;">RSVP Request</h2>
                                  <div>
                                  ${moment(new Date().toISOString())
                                    .tz('Asia/Kolkata')
                                    .format('Do MMMM YYYY hh:mm a')}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="text-align: right">
                          <a
                            href="https://www.google.co.in/maps"
                            target="_blank"
                          >
                            <span
                              style="
                                background-image: url(https://ssl.gstatic.com/gb/images/p1_c9bc74a1.png);
                                background-size: 64px 3100px;
                                background-position: 0 -483px;
                                display: inline-block;
                                height: 64px;
                                vertical-align: top;
                                width: 64px;
                              "
                            ></span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px">
                  <table class="data" style="border-spacing: 16px">
                    <tbody>
                      ${AllRsvpFields.map((field) => {
                        const value = get(data, field.id);
                        return value
                          ? `
                            <tr id="${field.id}">
                              <td style="padding-right: 16px; white-space: nowrap">
                                <strong>${field.label}</strong>
                              </td>
                              <td>${value}</td>
                            </tr>
                          `
                          : '';
                      }).join('')}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
  `;
};
