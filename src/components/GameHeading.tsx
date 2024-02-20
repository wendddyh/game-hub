import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../page/Homepage";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
