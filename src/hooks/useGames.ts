import { useEffect, useState } from 'react';
import axiosInstance from '../services/api-client';
import type { Game } from '../entities/Game';

export interface GameQuery {
  genre: number | null;
  platform: number | null;
  sortOrder: string;
  searchText: string;
}

interface FetchResponse {
  count: number;
  results: Game[];
}

/**
 * Custom hook to fetch games based on query filters
 */
export const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    axiosInstance
      .get<FetchResponse>('/games', {
        signal: controller.signal,
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'CanceledError') {
          setError(err.message);
        }
        setIsLoading(false);
      });

    // Cleanup: cancel request if component unmounts
    return () => controller.abort();
  }, [gameQuery]);

  return { games, error, isLoading };
};
