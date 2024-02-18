import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Text } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import apiClient  from "../services/apiClient";


interface Game{
  id:number;
  name: string
}

interface FetchgameResponse{
  count: number;
  results: Game[]
}

const Cards = () => {
 const [games, setGames] = useState<Game[]>([]);
 const [error, setError] = useState('');

 useEffect(() => {
  apiClient.get<FetchgameResponse>('/games')
  .then(res => setGames(res.data.results))
  .catch(err => setError(err.message));

 })



  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {games.map(game => <li key={game.id}>{game.name}</li>)}

    </ul>
    </>


  )
}

export default Cards
