
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from '../services/image-url';



const GenreList = () => {
  const {data} = useGenres();
  return (

 <List>
  {data.map( g => <ListItem padding={'5px'} key={g.id}>
    <HStack>
    <Image boxSize={'32px'} borderRadius={'8px'} src={getCroppedImageUrl(g.image_background)}></Image>
    <Text>{g.name}</Text>
    </HStack>
   </ListItem>)}
 </List>
    
  ) 
}

export default GenreList