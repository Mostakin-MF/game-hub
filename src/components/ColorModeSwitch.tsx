import { HStack, Button } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useState } from 'react';

export default function ColorModeSwitch() {
  const [isDark, setIsDark] = useState(true);

  const toggleColorMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.style.colorScheme = 'dark';
    }
  };

  return (
    <HStack>
      <Button
        onClick={toggleColorMode}
        variant="ghost"
        size="sm"
        _hover={{ bg: 'gray.700' }}
      >
        {isDark ? <MdLightMode /> : <MdDarkMode />}
      </Button>
    </HStack>
  );
}
