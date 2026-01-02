interface CriticScoreProps {
  score: number;
}

export default function CriticScore({ score }: CriticScoreProps) {
  let colorClass = 'bg-gray-600 text-gray-100';
  if (score > 75) colorClass = 'bg-green-100 text-green-800';
  else if (score > 60) colorClass = 'bg-yellow-100 text-yellow-800';

  return (
    <span className={`px-2 py-1 rounded text-sm font-bold ${colorClass}`}>
      {score}
    </span>
  );
}
