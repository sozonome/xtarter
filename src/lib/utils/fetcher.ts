import type { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

type FetcherArgs<ReqType> = {
  url: string;
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  data?: ReqType | AxiosRequestConfig["data"];
  method?: AxiosRequestConfig["method"];
};

export const fetcher = <ResType, ReqType = unknown>({
  url,
  params,
  headers,
  data,
  method = "GET",
}: FetcherArgs<ReqType>) =>
  axios(url, { params, headers, data, method }).then(
    (res: AxiosResponse<ResType>) => res.data
  );
