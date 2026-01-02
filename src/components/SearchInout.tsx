'use client';

import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full relative">
      <div className="relative">
        <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          ref={ref}
          placeholder="Search games..."
          onChange={handleSearch}
          className="w-full bg-gray-100 text-gray-800 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>
  );
}
