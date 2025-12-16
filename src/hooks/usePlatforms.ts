import { useEffect, useState } from 'react';
import axiosInstance from '../services/api-client';
import type { Platform } from '../entities/Platform';

interface FetchResponse {
  results: Platform[];
}

export const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    axiosInstance
      .get<FetchResponse>('/platforms/lists/parents', { signal: controller.signal })
      .then((res) => {
        setPlatforms(res.data.results);
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

  return { platforms, error, isLoading };
};
