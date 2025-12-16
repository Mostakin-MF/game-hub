import { SimpleGrid, Text } from '@chakra-ui/react';
import { type Game } from '../entities/Game';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface GameGridProps {
  games: Game[];
  isLoading: boolean;
  error: string | null;
}

export default function GameGrid({ games, isLoading, error }: GameGridProps) {
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gap={6} p={4}>
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))
        : games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
}
