import { useAsyncFn } from 'react-use';
import { AsyncFnReturn } from 'react-use/lib/useAsyncFn';

export const useFetch = <T>() => {
  return useAsyncFn(async (url, options) => {
    return fetch(url, options)
      .then((result) => result.json())
      .catch((error) => error);
  }) as AsyncFnReturn<(url: string, options?: object) => Promise<T>>;
};
