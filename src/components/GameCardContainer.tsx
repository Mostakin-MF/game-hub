import { Box } from '@chakra-ui/react';
import {type ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

export default function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box borderRadius={8} overflow="hidden" _hover={{ transform: 'scale(1.05)', transition: '0.2s' }}>
      {children}
    </Box>
  );
}
