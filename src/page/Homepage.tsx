import { Grid, GridItem } from "@chakra-ui/react"
import Cards from "../components/Cards"
import Header from "../components/Header"
import GenreList from "../components/GenreList"


const Homepage = () => {
  return (
    <Grid
      templateAreas={`"header header"
                      "aside main"
                      "aside footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'  >

      <GridItem pl={1} area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl={1} area={'aside'}>
        <GenreList />
      </GridItem>
      <GridItem pl={1} area={'main'}>
        <Cards />
      </GridItem>
      <GridItem pl={1} area={'footer'}>
        Footer
      </GridItem>


    </Grid>


  )
}

export default Homepage
