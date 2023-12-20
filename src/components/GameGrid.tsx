import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCarSkeleton from './GameCarSkeleton';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';


interface Props {
  selectedGenre : Genre | null
  selectPlatform : Platform | null
}
const GameGrid = ({selectedGenre , selectPlatform} : Props) => {
const {data , error , isLoading} = useGames(selectedGenre , selectPlatform)
const skeletons = [1,2,3,4,5,6 ,7 ,8,9,10,11,12]
  return (
    <>
  
{error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm : 1 , md : 2 , lg : 3 , xl : 4}} spacing={3} padding={"10px"}>
    {(isLoading) && skeletons.map(skeleton => <GameCardContainer key={skeleton}>
      <GameCarSkeleton />
      </GameCardContainer>)}
    {data.map((game) => 
     <GameCardContainer key={game.id}> 
      <GameCard  game={game} />
      </GameCardContainer>
      )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid