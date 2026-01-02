import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';
import type { Game } from '../entities/Game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-bold mb-2 text-white truncate" title={game.name}>
          {game.name}
        </h3>
        <div className="flex justify-between items-center mt-auto">
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </div>
      </div>
    </div>
  );
}
