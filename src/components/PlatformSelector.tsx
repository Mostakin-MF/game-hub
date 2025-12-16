import { Box } from '@chakra-ui/react';
import { usePlatforms } from '../hooks/usePlatforms';

interface PlatformSelectorProps {
  onSelectPlatform: (platformId: number | null) => void;
  selectedPlatformId: number | null;
}

export default function PlatformSelector({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) {
  const { platforms, error, isLoading } = usePlatforms();

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading platforms...</div>;

  return (
    <Box>
      <select
        value={selectedPlatformId ?? ''}
        onChange={(e) =>
          onSelectPlatform(e.target.value === '' ? null : Number(e.target.value))
        }
      >
        <option value="">All Platforms</option>
        {platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </Box>
  );
}
