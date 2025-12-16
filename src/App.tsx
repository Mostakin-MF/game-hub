import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { useGames, type GameQuery } from './hooks/useGames';

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: '',
    searchText: '',
  });

  const { games, error, isLoading } = useGames(gameQuery);

  return (
    <Grid templateAreas={`"nav nav"
                          "aside main"`}
          templateColumns="200px 1fr"
          h="100vh"
          gap={0}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>

      <GridItem area="aside" bg="gray.800" p={5} overflowY="auto">
        <GenreList
          selectedGenreId={gameQuery.genre}
          onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genre: genreId })}
        />
      </GridItem>

      <GridItem area="main">
        <Box p={4}>
          <HStack gap={4} mb={4}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platform}
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platform: platformId })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>

          <GameGrid games={games} isLoading={isLoading} error={error} />
        </Box>
      </GridItem>
    </Grid>
  );
}
