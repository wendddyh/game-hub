import { Badge } from "@chakra-ui/react"

interface Props{
  score: number
}


const CriticScore = ({score}: Props) => {
  let color = score > 75 ? 'green.400' : score > 60 ? 'yellow' : '';
  return (
    <Badge color={color} fontSize='14px' padding='5px' borderRadius={2}>{score}</Badge>
  )
}

export default CriticScore
