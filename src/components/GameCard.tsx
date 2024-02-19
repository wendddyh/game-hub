import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='4l'>{game.name}</Heading>
        <HStack justifyContent= 'space-between'>
          <PlatformIconList platforms={game.parent_platforms.map(item => item.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>

      </CardBody>
    </Card>
  );
};

export default GameCard;
