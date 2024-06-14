import axios from 'axios';
import React, {useState, useCallback, useEffect} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const {data: fetchedData} = await axios.get(url);
      setData(fetchedData);
    } catch (err) {
      setError(err);
      console.error('Veri getirilirken hata:', err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return {data, loading, error};
}