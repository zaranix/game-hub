import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCarSkeleton = () => {
  return (
    <Card>
      <Skeleton height={'200px'}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  )
}

export default GameCarSkeleton