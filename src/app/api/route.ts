import { formatResponse } from '@/utils';

export async function GET() {
  return formatResponse(200, {
    status: 'OK',
    version: 'v1',
    message: 'API is working fine',
  });
}
