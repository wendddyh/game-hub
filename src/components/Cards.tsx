import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const Cards = () => {
  //use hook
  const {games, error, isLoading} =  useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7 , 8]

  return (
    <>
    {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding={5} spacing={5}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}></GameCardSkeleton>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
      ))};

      </SimpleGrid>
    </>


  )
}

export default Cards
