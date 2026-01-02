import Link from 'next/link';
import SearchInput from './SearchInout';
import { useGameQueryStore } from '../context/GameQueryContext';

export default function NavBar() {
  const { setSearchText } = useGameQueryStore();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold ml-4">GameHub</Link>
        <Link href="/profiles" className="hover:text-gray-300">Profiles</Link>
        <Link href="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
      </div>
      <div className="w-[450px]">
        <SearchInput onSearch={setSearchText} />
      </div>
    </div>
  );
}
