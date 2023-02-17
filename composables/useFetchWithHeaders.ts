import { UseFetchOptions } from "#app";
import { NitroFetchRequest } from "nitropack";
import { KeyOfRes } from "nuxt/dist/app/composables/asyncData";

interface response {
  data: object;
}


// useFetchWithHeaders<T>
export function useFetchWithHeaders(
  request: NitroFetchRequest,
  opts?: any
  // | UseFetchOptions<
  //     T extends void ? unknown : T,
  //     (res: T extends void ? unknown : T) => T extends void ? unknown : T,
  //     KeyOfRes<
  //       (res: T extends void ? unknown : T) => T extends void ? unknown : T
  //     >
  //   >
  // | undefined
) {
  const config = useRuntimeConfig();
  // useFetch<T>
  return useFetch<response>(request, {
    baseURL: config.public.baseURL,
    ...opts,
    headers: {
      "X-API-KEY": config.public.key,
      "Content-Type": "application/json",
    },
  });
}
