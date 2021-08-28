import { useState, useEffect } from 'react';
import axios from 'axios';
import { RequestUrl } from '../types';

type Method = 'post' | 'get';
axios.defaults.baseURL = 'https://api.7zaowang.com/index.php/api/';

const useQueryAxios = <T, D>(url: RequestUrl, body?: T, method?: Method) => {
  const [data, setData] = useState<D>();
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method || 'post'](url, body)
      .then((res) => {
        if (res.status === 200) setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url, body, method]);

  return { data, error, loading };
};

export default useQueryAxios;
