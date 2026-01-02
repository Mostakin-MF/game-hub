import Link from 'next/link';
import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';
import type { Game } from '../entities/Game';

interface GameCardProps {
  game: Game;
}


import StarRating from './StarRating';

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group bg-gray-800 rounded-lg group-hover:rounded-b-none h-full flex flex-col relative transition-transform duration-300 shadow-lg hover:shadow-2xl">
      <Link href={`/games/${game.slug}`}>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col justify-between flex-1">
          <h3 className="text-lg font-bold mb-2 text-white truncate" title={game.name}>
            {game.name}
          </h3>
          
          <div className="flex justify-between items-center mb-2">
            {game.parent_platforms && (
              <div className="flex gap-1 text-gray-400 text-xs">
                 {/* Icon placeholders could go here */}
                 {game.parent_platforms.map(({ platform }) => (
                   <span key={platform.id}>{platform.slug.slice(0, 3)}</span>
                 ))}
              </div>
            )}
             {game.metacritic && <CriticScore score={game.metacritic} />}
          </div>

          {/* Hover Details */}
          <div className="absolute top-full left-0 w-full bg-gray-800 p-4 rounded-b-lg shadow-xl z-20 hidden group-hover:block">
            <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
              <span>Rating:</span>
              <StarRating rating={game.rating_top} />
            </div>
            {game.genres && (
               <div className="text-xs text-gray-500 mb-3">
                 {game.genres.map(g => g.name).join(', ')}
               </div>
            )}
            
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-center text-sm font-bold transition-colors">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
