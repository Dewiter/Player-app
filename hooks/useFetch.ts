import { useAsyncFn } from 'react-use';
import { AsyncFnReturn } from 'react-use/lib/useAsyncFn';

export const useFetch = <T>() => {
  return useAsyncFn(async (url, type = 'GET', body = null) => {
    return fetch(url, {
      ...{ body },
      method: type,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .catch((error) => error);
  }) as AsyncFnReturn<(url: any, type?: any, body?: any) => Promise<T>>;
};
