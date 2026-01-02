'use client';

import { useGameQueryStore } from '../context/GameQueryContext';
import NavBar from '../components/NavBar';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import { useGames, type GameQuery } from '../hooks/useGames';

export default function Home() {
  const { gameQuery } = useGameQueryStore();
  const { games, error, isLoading } = useGames(gameQuery);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] min-h-screen">
      <div className="col-span-1 lg:col-span-2">
        <NavBar />
      </div>

      <aside className="hidden lg:block bg-gray-800 p-5">
        <GenreList />
      </aside>

      <main className="p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <PlatformSelector />
          <SortSelector />
        </div>

        <GameGrid games={games} isLoading={isLoading} error={error} />
      </main>
    </div>
  );
}
