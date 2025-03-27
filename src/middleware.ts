import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const uA = userAgent(request);
  const requestHeaders = new Headers(request.headers);
  let ip: string = request.headers.get('cf-connecting-ip') ?? '';
  const xRealIp = requestHeaders.get('x-real-ip');
  const xForwardedFor = requestHeaders.get('x-forwarded-for');
  const cfConnectingIp = requestHeaders.get('cf-connecting-ip');
  if (typeof xRealIp === 'string' && xRealIp !== '127.0.0.1') {
    ip = xRealIp;
  } else if (
    typeof xForwardedFor === 'string' &&
    xForwardedFor !== '127.0.0.1'
  ) {
    ip = xForwardedFor;
  } else if (
    typeof cfConnectingIp === 'string' &&
    cfConnectingIp !== '127.0.0.1'
  ) {
    ip = cfConnectingIp;
  }
  if (ip === '::1') {
    ip = '';
  }
  requestHeaders.set(
    'x-custom-data',
    JSON.stringify({
      userAgent: uA,
      source: atob(decodeURIComponent(searchParams.get('s') ?? '')),
      ip,
    }),
  );
  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}
