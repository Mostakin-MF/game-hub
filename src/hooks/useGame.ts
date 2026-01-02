import { useEffect, useState } from 'react';
import axiosInstance from '../services/api-client';
import type { Game } from '../entities/Game';

export const useGame = (slug: string) => {
    const [game, setGame] = useState<Game | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!slug) return;

        const controller = new AbortController();
        setIsLoading(true);
        setGame(null);
        setError(null);

        axiosInstance
            .get<Game>(`/games/${slug}`, { signal: controller.signal })
            .then((res) => {
                setGame(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                if (err.name !== 'CanceledError') {
                    setError(err.message);
                }
                setIsLoading(false);
            });

        return () => controller.abort();
    }, [slug]);

    return { game, error, isLoading };
};
