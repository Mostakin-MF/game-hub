import { HStack, Heading } from '@chakra-ui/react';
import SearchInput from './SearchInout';
import ColorModeSwitch from './ColorModeSwitch';

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

export default function NavBar({ onSearch }: NavBarProps) {
  return (
    <HStack padding="1rem" bg="gray.800" color="white" justify="space-between">
      <Heading size="lg" ml={4}>GameHub</Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
