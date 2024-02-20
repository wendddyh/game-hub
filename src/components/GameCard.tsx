import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack  marginBottom={3} justifyContent= 'space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(item => item.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='5l'>{game.name}</Heading>
        <Box paddingY ={2}>
          <Emoji rating={game.rating_top}/>
        </Box>

      </CardBody>
    </Card>
  );
};

export default GameCard;
