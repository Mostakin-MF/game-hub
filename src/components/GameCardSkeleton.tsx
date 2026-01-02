export default function GameCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden animate-pulse mb-6">
      <div className="h-48 bg-gray-700 w-full" />
      <div className="p-4">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}
