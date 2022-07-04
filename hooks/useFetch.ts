import { useAsyncFn } from 'react-use';
import { AsyncFnReturn } from 'react-use/lib/useAsyncFn';

export type useFecthTypes = {
  url: string;
  options?: object;
};

// custom hook -- useFetch --
// fetches data from based on a url if options were specified
// they will be used in fetch
export const useFetch = <T>() => {
  return useAsyncFn(async (url, options) => {
    return fetch(url, options)
      .then((result) => result.json())
      .catch((error) => error);
  }) as AsyncFnReturn<(url: string, options?: object) => Promise<T>>;
};
