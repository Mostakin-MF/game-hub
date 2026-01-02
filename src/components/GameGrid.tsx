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
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {isLoading
        ? skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </div>
  );
}
