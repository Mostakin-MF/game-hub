'use client';

import NavBar from "@/components/NavBar";
import { useGames } from "@/hooks/useGames";

// Dummy data
const leaderboardData = [
  { rank: 1, user: "NoobMaster69", score: 99999, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Annie" },
  { rank: 2, user: "ProGamer_XYZ", score: 88500, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Bob" },
  { rank: 3, user: "GlitchHunter", score: 82000, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Clyde" },
  { rank: 4, user: "SpeedRunner01", score: 75000, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Dave" },
  { rank: 5, user: "CasualPlayer", score: 60000, avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eve" },
];

const favoriteGamesQuery = {
  genre: null,
  platform: null,
  sortOrder: '-rating',
  searchText: '',
};

export default function LeaderboardPage() {
  const { games, isLoading } = useGames(favoriteGamesQuery);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <div className="container mx-auto p-6 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Global Leaderboard</h1>

        {/* Winners Podium */}
        <div className="flex justify-center items-end gap-4 mb-16 h-64">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="mb-2 flex flex-col items-center">
              <img src={leaderboardData[1].avatar} alt={leaderboardData[1].user} className="w-16 h-16 rounded-full border-4 border-gray-400" />
              <span className="font-bold text-sm mt-1">{leaderboardData[1].user}</span>
              <span className="text-xs text-gray-400">{leaderboardData[1].score.toLocaleString()}</span>
            </div>
            <div className="w-24 h-32 bg-gray-700 rounded-t-lg flex items-center justify-center border-t-4 border-gray-400 relative">
              <span className="text-4xl">🥈</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center z-10 -mb-2">
             <div className="mb-2 flex flex-col items-center animate-bounce">
              <span className="text-2xl mb-1">👑</span>
              <img src={leaderboardData[0].avatar} alt={leaderboardData[0].user} className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
              <span className="font-bold text-base mt-1 text-yellow-400">{leaderboardData[0].user}</span>
              <span className="text-xs text-gray-400">{leaderboardData[0].score.toLocaleString()}</span>
            </div>
            <div className="w-28 h-40 bg-gray-800 rounded-t-lg flex items-center justify-center border-t-4 border-yellow-400 relative shadow-2xl">
              <span className="text-6xl">🥇</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
             <div className="mb-2 flex flex-col items-center">
              <img src={leaderboardData[2].avatar} alt={leaderboardData[2].user} className="w-16 h-16 rounded-full border-4 border-orange-700" />
              <span className="font-bold text-sm mt-1">{leaderboardData[2].user}</span>
              <span className="text-xs text-gray-400">{leaderboardData[2].score.toLocaleString()}</span>
            </div>
            <div className="w-24 h-24 bg-gray-700 rounded-t-lg flex items-center justify-center border-t-4 border-orange-700 relative">
              <span className="text-4xl">🥉</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
              <tr>
                <th className="p-4 text-center w-20">Rank</th>
                <th className="p-4">Player</th>
                <th className="p-4 hidden md:table-cell">Favorite Game</th>
                <th className="p-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {leaderboardData.map((player, index) => (
                <tr key={player.rank} className="hover:bg-gray-750 transition-colors">
                  <td className="p-4 text-center font-bold text-xl">
                    {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : player.rank}
                  </td>
                  <td className="p-4 flex items-center gap-4">
                    <img src={player.avatar} alt={player.user} className="w-10 h-10 rounded-full bg-gray-600" />
                    <span className="font-semibold">{player.user}</span>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    {isLoading ? (
                      <div className="h-10 w-32 bg-gray-700 rounded animate-pulse"></div>
                    ) : (
                      games[index] && (
                        <div className="flex items-center gap-2">
                          <img src={games[index].background_image} alt={games[index].name} className="w-12 h-8 object-cover rounded" />
                          <span className="text-sm text-gray-400">{games[index].name}</span>
                        </div>
                      )
                    )}
                  </td>
                  <td className="p-4 text-right font-mono text-lg text-blue-400">
                    {player.score.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
