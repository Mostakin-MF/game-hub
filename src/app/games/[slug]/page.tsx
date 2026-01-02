'use client';

import { use } from 'react';
import Link from 'next/link';
import { useGame } from '../../../hooks/useGame';
import NavBar from '../../../components/NavBar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function GameDetailPage({ params }: PageProps) {
  // Unwrap params using React.use()
  const { slug } = use(params);
  
  const { game, error, isLoading } = useGame(slug);

  if (isLoading) return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
       <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>
  );

  if (error || !game) return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Game not found</h1>
      <p className="text-gray-400">{error}</p>
      <Link href="/" className="text-blue-400 hover:underline">Back to Home</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        <img 
          src={game.background_image} 
          alt={game.name} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20 container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{game.name}</h1>
          <div className="flex flex-wrap gap-4">
             {game.parent_platforms?.map(({ platform }) => (
               <span key={platform.id} className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300 border border-gray-700">
                 {platform.name}
               </span>
             ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        {/* Main Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-200">About</h2>
          <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
            {game.description_raw ? (
               game.description_raw.split('\n\n').map((paragraph, idx) => (
                 <p key={idx} className="mb-4">{paragraph}</p>
               ))
            ) : (
              <p>No description available.</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
             <h3 className="text-xl font-bold mb-4 text-gray-200 border-b border-gray-700 pb-2">Information</h3>
             
             <div className="grid grid-cols-2 gap-y-4 text-sm">
               <div className="text-gray-500">Metascore</div>
               <div>
                  {game.metacritic ? (
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded font-bold border border-green-700">{game.metacritic}</span>
                  ) : 'N/A'}
               </div>

               <div className="text-gray-500">Genres</div>
               <div className="flex flex-wrap gap-1">
                 {game.genres?.map(g => (
                   <span key={g.id} className="underline decoration-dotted hover:text-white cursor-pointer">{g.name}</span>
                 ))}
               </div>

               <div className="text-gray-500">Publishers</div>
               <div>
                 {game.publishers?.map(p => p.name).join(', ') || 'Unknown'}
               </div>
               
               <div className="text-gray-500">Website</div>
               <div>
                 {game.website ? (
                   <a href={game.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline truncate block">
                     Visit Official Site
                   </a>
                 ) : 'N/A'}
               </div>
             </div>
           </div>
           
           <Link 
             href="/" 
             className="block w-full py-3 bg-gray-700 hover:bg-gray-600 text-center rounded-lg font-bold transition-colors"
           >
             Back to Library
           </Link>
        </div>
      </div>
    </div>
  );
}
