import { useEffect, useState } from 'react';

import axios from 'axios';

interface UseAxiosProps {
  baseUrl: string;
  params: { page?: number; sortBy?: string; order?: string; limit?: number };
  body?: object;
  headers?: object;
  method: 'get' | 'post';
}

const useAxios = ({
  baseUrl,
  params,
  method,
  body,
  headers,
}: UseAxiosProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
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
  };

  useEffect(() => {
    fetchData();
  }, [method, baseUrl, body, headers, params.page]);

  return { response, error, loading };
};

export default useAxios;
