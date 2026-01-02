'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { GameQuery } from '../hooks/useGames';

interface GameQueryContextType {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const GameQueryContext = createContext<GameQueryContextType | undefined>(undefined);

export const GameQueryProvider = ({ children }: { children: ReactNode }) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const setGenreId = (genreId: number) =>
    setGameQuery((prev) => ({ ...prev, genre: genreId }));

  const setPlatformId = (platformId: number) =>
    setGameQuery((prev) => ({ ...prev, platform: platformId }));

  const setSortOrder = (sortOrder: string) =>
    setGameQuery((prev) => ({ ...prev, sortOrder }));

  const setSearchText = (searchText: string) =>
    setGameQuery((prev) => ({ ...prev, searchText }));

  return (
    <GameQueryContext.Provider
      value={{
        gameQuery,
        setGenreId,
        setPlatformId,
        setSortOrder,
        setSearchText,
      }}
    >
      {children}
    </GameQueryContext.Provider>
  );
};

export const useGameQueryStore = () => {
  const context = useContext(GameQueryContext);
  if (!context)
    throw new Error('useGameQueryStore must be used within a GameQueryProvider');
  return context;
};
