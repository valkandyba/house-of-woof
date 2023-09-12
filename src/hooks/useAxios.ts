import { useEffect, useState } from 'react';

import axios from 'axios';

interface UseAxiosProps {
  baseUrl: string;
  params: object;
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
  }, [method, baseUrl, body, headers]);

  return { response, error, loading };
};

export default useAxios;
