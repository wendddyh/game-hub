import { Grid, GridItem } from "@chakra-ui/react"
import Header from "../components/Header"
import GenreList from "../components/GenreList"
import { Cards } from "../components/Cards"
import { useState } from "react"
import { Genre } from "../hooks/useGenre"


const Homepage = () => {
  const[selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{
                base: `"nav main"`,
                lg: `"nav nav"
                    "aside main"`,
      }}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='medium'  >

      <GridItem pl={1} area={'nav'}>
        <Header />
      </GridItem>
      <GridItem pl={1} area={'aside'} paddingX={5}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem pl={1} area={'main'}>
        <Cards selectedGenre={selectedGenre}/>
      </GridItem>



    </Grid>


  )
}

export default Homepage
