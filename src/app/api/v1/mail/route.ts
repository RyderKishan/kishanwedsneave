import { getRsvpHtml } from '@/helpers';
import { decode, formatResponse, getRequestData } from '@/utils';
import Mailgun from 'mailgun.js';

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

export async function POST(request: Request) {
  const apiKey = request.headers.get('x-api-key') as string;
  if (!apiKey) {
    return formatResponse(401, {
      status: 'ERROR',
      message: 'Invalid Headers',
    });
  }
  const expiryTimeStamp = Number(decode(apiKey)) + 10000;
  const currentTimeStamp = new Date().valueOf();
  if (
    isNaN(expiryTimeStamp) ||
    expiryTimeStamp === 0 ||
    expiryTimeStamp < currentTimeStamp
  ) {
    return formatResponse(403, {
      status: 'ERROR',
      message: 'Invalid Headers',
    });
  }
  const body = await getRequestData<{ data: string }>(request);
  if (!body?.data) {
    return formatResponse(400, {
      status: 'ERROR',
      message: 'Invalid Request Body',
    });
  }

  const decodedData = decode(body.data);
  const data = JSON.parse(decodedData);

  const html = getRsvpHtml(data);

  try {
    const response = await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Wedding Bot <mailgun@${MAILGUN_DOMAIN}>`,
      to: [MAIL_TO],
      subject: 'RSVP Request',
      html: html ?? '',
    });
    return formatResponse(200, response);
  } catch (error: any) {
    return formatResponse(500, {
      status: 'ERROR',
      message: error?.message ?? 'Something went wrong',
    });
  }
}
