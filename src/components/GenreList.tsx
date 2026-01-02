import { useGenres } from '../hooks/useGenres';
import type { Genre } from '../entities/Genre';

import { useGameQueryStore } from '../context/GameQueryContext';

export default function GenreList() {
  const { genres, error, isLoading } = useGenres();
  const { gameQuery, setGenreId } = useGameQueryStore();

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold mb-3">Genres</h2>
      <button
        onClick={() => setGenreId(-1)} // -1 for all genres? logic needs check. Original was null.
        className={`w-full text-left p-2 rounded flex items-center transition-colors ${gameQuery.genre === null ? 'bg-gray-700 font-bold' : 'hover:bg-gray-700'}`}
      >
        All Genres
      </button>

      <div className="flex flex-col gap-2">
        {genres.map((genre: Genre) => (
          <button
            key={genre.id}
            onClick={() => setGenreId(genre.id)}
            className={`w-full text-left p-2 rounded flex items-center transition-colors ${gameQuery.genre === genre.id ? 'bg-gray-700 font-bold' : 'hover:bg-gray-700'}`}
          >
            <img
              src={genre.image_background}
              alt={genre.name}
              className="w-8 h-8 rounded mr-2 object-cover"
            />
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
