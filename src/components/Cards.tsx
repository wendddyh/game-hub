import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';





const Cards = () => {
  //use hook
  const {games, error} =  useGames();

  return (
    <>
    {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={5} spacing={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
      ))};

      </SimpleGrid>
    </>


  )
}

export default Cards
