import { Box } from '@chakra-ui/react';

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

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

export default function SortSelector({
  onSelectSortOrder,
  sortOrder,
}: SortSelectorProps) {
  return (
    <Box>
      <select
        value={sortOrder}
        onChange={(e) => onSelectSortOrder(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Box>
  );
}
