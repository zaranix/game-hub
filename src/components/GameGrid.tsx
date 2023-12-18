import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCarSkeleton from './GameCarSkeleton';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
const {data , error , isLoading} = useGames()
const skeletons = [1,2,3,4,5,6 ,7 ,8,9,10,11,12]
  return (
    <>
  
{error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm : 1 , md : 2 , lg : 3 , xl : 4}} spacing={10} padding={"10px"}>
    {(isLoading) && skeletons.map(skeleton => <GameCardContainer>
      <GameCarSkeleton key={skeleton}/>
      </GameCardContainer>)}
    {data.map((game) => 
     <GameCardContainer> 
      <GameCard key={game.id} game={game} />
      </GameCardContainer>
      )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid