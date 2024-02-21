import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Header from "../components/Header";
import GenreList from "../components/GenreList";
import { Cards } from "../components/Cards";
import { useState } from "react";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components/SortSelector";
import SearchInput from "../components/SearchInput";
import GameHeading from "../components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}

const Homepage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav"
              "aside main"`
      }}
      gridTemplateRows={'10px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
    >
      <GridItem area="nav" paddingX={3}>
        <Header onSearch={(searchText)=> setGameQuery({...gameQuery, searchText}) }/>
      </GridItem>

      <Show above='lg'>
        <GridItem area="aside" paddingX={5} paddingY='115px'>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre })}
          />
        </GridItem>
      </Show>


      <GridItem marginY= {2} area="main">
        <Box padding={6}>
          <GameHeading gameQuery={gameQuery}/>
        </Box>
        <HStack spacing={5} paddingLeft={6} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})} />

        </HStack>
        <Cards gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
