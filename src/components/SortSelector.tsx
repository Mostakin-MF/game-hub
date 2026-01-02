import { useGameQueryStore } from '../context/GameQueryContext';

const sortOptions = [
  { label: 'Relevance', value: '' },
  { label: 'Date Added (Recent)', value: '-added' },
  { label: 'Date Added (Oldest)', value: 'added' },
  { label: 'Name (A-Z)', value: 'name' },
  { label: 'Name (Z-A)', value: '-name' },
  { label: 'Release Date (Recent)', value: '-released' },
  { label: 'Release Date (Oldest)', value: 'released' },
  { label: 'Rating (Highest)', value: '-rating' },
  { label: 'Rating (Lowest)', value: 'rating' },
];

export default function SortSelector() {
  const { gameQuery, setSortOrder } = useGameQueryStore();

  return (
    <select
      value={gameQuery.sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="bg-gray-700 text-white p-2 rounded cursor-pointer hover:bg-gray-600 outline-none"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value} className="bg-gray-800">
          {option.label}
        </option>
      ))}
    </select>
  );
}
