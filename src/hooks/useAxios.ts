import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export enum FetchMethod {
  GET = "get",
  POST = "post"
}
interface UseAxiosProps {
  baseUrl: string;
  headers?: object;
}

interface FetchParams {
  params: { page?: number; sortBy?: string; order?: string; limit?: number };
  body?: object;
  method: FetchMethod;
}

const useAxios = <ResponseData>({
  baseUrl,
  headers,
}: UseAxiosProps) => {
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(({
    params,
    method,
    body }: FetchParams
  ) => {
    axios[method](baseUrl, { headers, body, params })
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseUrl, headers]);

  return { response, error, loading, fetchData };
};

export default useAxios;
