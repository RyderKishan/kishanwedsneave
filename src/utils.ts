export const debounce = (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

export const throttle = (func: () => void, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return () => {
    const now = Date.now();
    if (!lastRan) {
      func();
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (now - lastRan >= limit) {
            func();
            lastRan = now;
          }
        },
        limit - (now - lastRan),
      );
    }
  };
};

export const formatResponse = (
  status: number,
  data: any,
  cache?: boolean,
): Response => {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      ...(cache ? ({ 'Cache-Control': 'public, max-age=3600' } as any) : {}),
    },
    status,
  });
};

export const getRequestData = async <T>(request: Request) => {
  const readableStream = request.body as ReadableStream;
  const reader = readableStream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  let done = false;

  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    result += decoder.decode(value, { stream: true });
  }
  const body = JSON.parse(result) as T;
  return body;
};

export const decode = (base64EncodedString: string): string => {
  try {
    const buff = Buffer.from(base64EncodedString, 'base64');
    const decodedString = buff.toString('utf-8');
    return decodedString;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return '';
  }
};

export const encode = (decodedString: string): string => {
  try {
    const buff = Buffer.from(decodedString, 'utf-8');
    const base64EncodedString = buff.toString('base64');
    return base64EncodedString;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return '';
  }
};
