
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre : (genre : Genre) => void
}

const GenreList = ({onSelectGenre} : Props) => {
  const {data , isLoading , error} = useGenres();



  if (error) return null;
  if(isLoading) return <Spinner />
  
  return (

 <List>
  {data.map( g => <ListItem padding={'5px'} key={g.id}>
    <HStack>
    <Image boxSize={'32px'} borderRadius={'8px'} src={getCroppedImageUrl(g.image_background)}></Image>
    <Button onClick={() => onSelectGenre(g)}  fontSize={'lg'} variant={'link'}>{g.name}</Button>
    </HStack>
   </ListItem>)}
 </List>
    
  ) 
}

export default GenreList