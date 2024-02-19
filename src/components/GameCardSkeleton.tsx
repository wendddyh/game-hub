import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton  borderRadius={10} overflow={'hidden'} height='250px'/>
      <CardBody>
        <SkeletonText />
      </CardBody>

    </Card>
  )
}

export default GameCardSkeleton
