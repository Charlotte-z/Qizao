import { useState } from 'react';
import axios from 'axios';
import { RequestUrl } from '../types';

type Method = 'post' | 'get';
type LazyQueyr<D> = [
  Function,
  { data: D | null | undefined; error: string; loading: boolean },
];
axios.defaults.baseURL = 'https://api.7zaowang.com/index.php/api/';

const useLazyAxios = <T, D>(
  url: RequestUrl,
  body?: T,
  method?: Method,
): LazyQueyr<D> => {
  const [data, setData] = useState<D>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method || 'post'](url, body)
      .then((res) => {
        if (res.status === 200) setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  return [fetchData, { data, error, loading }];
};

export default useLazyAxios;
