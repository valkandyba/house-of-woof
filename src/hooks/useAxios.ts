import { useEffect, useState } from 'react';

import axios from 'axios';

interface UseAxiosProps {
  url: string;
  body?: object;
  headers?: object;
  method: 'get' | 'post';
}

const useAxios = ({ url, method, body, headers }: UseAxiosProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, { headers, body })
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
