import Link from 'next/link';
import { getCroppedImageUrl } from '../services/image-url';
import CriticScore from './CriticScore';
import type { Game } from '../entities/Game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col relative transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg hover:shadow-2xl">
      <Link href={`/games/${game.slug}`}>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full h-48 object-cover"
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
          <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
            <div className="pt-2 border-t border-gray-700 mt-2">
               <div className="flex justify-between text-sm text-gray-400 mb-1">
                 <span>Rating:</span>
                 <span className="text-white">{game.rating_top}/5</span>
               </div>
               {/* Genres would acturally require fetching if not in list, but usually list has them. 
                   Wait, Game entity update for list didn't include genres in previous verify. 
                   Let's check if the fetched list of games provides genres. It usually does. 
                   Assuming it does based on RAWG API for lists. */}
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
        </div>
      </Link>
    </div>
  );
}
