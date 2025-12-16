import { useEffect, useState } from 'react';
import axiosInstance from '../services/api-client';
import type { Genre } from '../entities/Genre';

interface FetchResponse {
  results: Genre[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axiosInstance
      .get<FetchResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          setError(err.message);
        }
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};
