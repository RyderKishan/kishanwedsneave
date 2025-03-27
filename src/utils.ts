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
