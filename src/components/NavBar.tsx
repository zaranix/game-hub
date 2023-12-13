import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} ></Image>
      <Text></Text>
    </HStack>
  )
}

export default NavBar