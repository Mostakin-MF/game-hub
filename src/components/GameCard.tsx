import { Box, Heading, Image, HStack } from '@chakra-ui/react';
import type { Game } from '../entities/Game';
import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Box borderRadius={8} overflow="hidden" bg="gray.700">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height="200px"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading size="sm" mb={2}>
          {game.name}
        </Heading>
        <HStack justify="space-between">
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
      </Box>
    </Box>
  );
}
