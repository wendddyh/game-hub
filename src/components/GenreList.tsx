
import useGenre, { Genre } from '../hooks/useGenre'
import { Box, HStack, Image, Spinner } from '@chakra-ui/react';


const GenreList = () => {
  const {data} = useGenre();

  return (
    <Box w={2} h={2}>
      {data.map(genre =>
        <HStack key= {genre.id}>
          <Image src ={genre.image_background}/>
          {genre.name}
        </HStack>
      )};
    </Box>

  )
}

export default GenreList
