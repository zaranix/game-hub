import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import usePlatform from '../hooks/usePlatform';


interface Props {
onSelectPlatform : (paltform :Platform) => void
selectedPlatform : Platform | null
}
const PlatformSelector = ({onSelectPlatform ,  selectedPlatform} : Props) => {

  const { data } = usePlatform();

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      {selectedPlatform?.name || "Platforms"}
    </MenuButton>
    <MenuList>
     {data.map( d => <MenuItem onClick={() => onSelectPlatform(d)} key={d.id}>{d.name}</MenuItem>)}
    </MenuList>
  </Menu>
  )
}

export default PlatformSelector