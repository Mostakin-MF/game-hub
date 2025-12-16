import { Box } from '@chakra-ui/react';
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
    <Box w="100%" display="flex" alignItems="center">
      <BsSearch style={{ marginRight: 8 }} />
      <input
        ref={ref}
        placeholder="Search games..."
        onChange={handleSearch}
        style={{ flex: 1, padding: '6px 8px', borderRadius: 4 }}
      />
    </Box>
  );
}
