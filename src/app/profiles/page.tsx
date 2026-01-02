'use client';

import NavBar from "@/components/NavBar";
import { useGames } from "@/hooks/useGames";

// Dummy data for profile
const userProfile = {
  username: "HardcoreGamer99",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix",
  bio: "Level 99 Paladin. I love RPGs and FPS games.",
  stats: {
    gamesPlayed: 142,
    hoursPlayed: 3500,
    achievements: 85,
  },
};

const recentGamesQuery = {
  genre: 4, // Action
  platform: null,
  sortOrder: '-added',
  searchText: '',
};

export default function ProfilesPage() {
  // Fetch RPG games (genre 5 is typically RPG in RAWG but let's just fetch sorted by rating or something)
  // Actually let's fetch 'Action' games or just recent ones.
  const { games, error, isLoading } = useGames(recentGamesQuery);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Player Profile</h1>

        <div className="bg-gray-800 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <img
            src={userProfile.avatar}
            alt={userProfile.username}
            className="w-40 h-40 rounded-full border-4 border-blue-500 bg-gray-700"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">{userProfile.username}</h2>
            <p className="text-gray-400 mb-4">{userProfile.bio}</p>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">{userProfile.stats.gamesPlayed}</p>
                <p className="text-sm text-gray-400">Games</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-2xl font-bold text-green-400">{userProfile.stats.hoursPlayed}</p>
                <p className="text-sm text-gray-400">Hours</p>
              </div>
              <div className="bg-gray-700 p-3 rounded-lg">
                <p className="text-2xl font-bold text-yellow-400">{userProfile.stats.achievements}%</p>
                <p className="text-sm text-gray-400">Achievements</p>
              </div>
            </div>

            {/* Genre Mastery */}
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-300">Genre Mastery</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>RPG</span>
                    <span>LVL 50</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[90%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Action</span>
                    <span>LVL 32</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Strategy</span>
                    <span>LVL 15</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[30%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Recent Activity (Real Data)</h3>
          {error && <p className="text-red-500">{error}</p>}
          <div className="space-y-4">
            {isLoading && <p>Loading games...</p>}
            {games.slice(0, 5).map((game) => (
              <div key={game.id} className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-750 transition-colors">
                <img src={game.background_image} alt={game.name} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <span className="font-bold text-lg block">{game.name}</span>
                  <span className="text-sm text-gray-400">Rating: {game.rating} / 5</span>
                </div>
                <span className="text-sm text-gray-400">Played recently</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
