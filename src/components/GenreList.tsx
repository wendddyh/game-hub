import useGenre, { Genre } from "../hooks/useGenre";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;

}

const GenreList = ({ onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (error) return null;

  return (
    <>
    <Heading fontSize='20px' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem paddingY="5px" key={genre.id}>
            <HStack>
              <Image
                objectFit='cover'
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenre?.id ? "bold" : " normal"}
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize="sm"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        ;
      </List>
    </>
  );
};

export default GenreList;
