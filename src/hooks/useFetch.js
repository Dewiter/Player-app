import { useAsyncFn } from "react-use";

export const useFetch = () => {
  return useAsyncFn(async (url, type = "GET", body = null) => {
    return fetch(url, {
      ...{ body },
      method: type,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .catch((error) => error);
  });
};
