import { usePlatforms } from '../hooks/usePlatforms';
import { useGameQueryStore } from '../context/GameQueryContext';

export default function PlatformSelector() {
  const { gameQuery, setPlatformId } = useGameQueryStore();
  const { platforms, error, isLoading } = usePlatforms();

  if (isLoading) return null;
  if (error) return null;

  return (
    <select
      value={gameQuery.platform ?? ''}
      onChange={(e) =>
        setPlatformId(e.target.value === '' ? -1 : Number(e.target.value)) // -1 or null? The type says number | null. Let's use null for empty.
      }
      className="bg-gray-700 text-white p-2 rounded cursor-pointer hover:bg-gray-600 outline-none"
    >
      <option value="">All Platforms</option>
      {platforms.map((platform) => (
        <option key={platform.id} value={platform.id} className="bg-gray-800">
          {platform.name}
        </option>
      ))}
    </select>
  );
}
