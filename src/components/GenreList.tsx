
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre : (genre : Genre) => void
  selectedGenre : Genre | null
}

const GenreList = ({onSelectGenre , selectedGenre} : Props) => {
  const {data , isLoading , error} = useGenres();



  if (error) return null;
  if(isLoading) return <Spinner />
  
  return (
    <>
<Heading fontSize={"2xl"} marginBottom={4}>Genre</Heading>
 <List>
  {data.map( g => <ListItem padding={'5px'} key={g.id}>
    <HStack>
    <Image objectFit={'cover'} boxSize={'32px'} borderRadius={'8px'} src={getCroppedImageUrl(g.image_background)}></Image>
    <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={g.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(g)}  fontSize={'lg'} variant={'link'}>{g.name}</Button>
    </HStack>
   </ListItem>)}
 </List>
    </>
 
  ) 
}

export default GenreList