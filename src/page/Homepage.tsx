import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Header from "../components/Header";
import GenreList from "../components/GenreList";
import { Cards } from "../components/Cards";
import { useState } from "react";
import { Genre } from "../hooks/useGenre";
import PlatformSelector from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import SortSelector from "../components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const Homepage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav"
                    "aside main"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
    >
      <GridItem pl={1} area={"nav"}>
        <Header />
      </GridItem>
      <GridItem pl={1} area={"aside"} paddingX={5}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem pl={1} area={"main"}>
        <HStack spacing={5} paddingLeft={6} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <Cards gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default Homepage;
