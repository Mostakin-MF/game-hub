import {
  Button,
  Image,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { useGenres } from '../hooks/useGenres';
import type { Genre } from '../entities/Genre';

interface GenreListProps {
  onSelectGenre: (genreId: number | null) => void;
  selectedGenreId: number | null;
}

export default function GenreList({
  onSelectGenre,
  selectedGenreId,
}: GenreListProps) {
  const { genres, error, isLoading } = useGenres();

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <Spinner />;

  return (
    <VStack gap={2} align="stretch">
      <Button
        variant={selectedGenreId === null ? 'solid' : 'ghost'}
        onClick={() => onSelectGenre(null)}
        w="100%"
      >
        All Genres
      </Button>

      <VStack gap={2}>
        {genres.map((genre: Genre) => (
          <Button
            key={genre.id}
            variant={selectedGenreId === genre.id ? 'solid' : 'ghost'}
            onClick={() => onSelectGenre(genre.id)}
            w="100%"
            display="flex"
            justifyContent="flex-start"
          >
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
              alt={genre.name}
              mr={2}
            />
            {genre.name}
          </Button>
        ))}
      </VStack>
    </VStack>
  );
}
