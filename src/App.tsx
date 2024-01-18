import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Platform } from './hooks/useGames'
import { Genre } from './hooks/useGenres'

//query object pattern
export interface GameQuery {
  genre : Genre | null
  platform : Platform | null
  sortOrder : string
  searchText : string
}
const App = () => {

const[gameQuery , setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid templateAreas={{
      base : `"nav" "main"`,
      lg : `"nav nav" "aside main"`,
    }}
    templateColumns={{
      base  : '1fr',
      lg : '200px 1fr'
    }}>

      <GridItem area="nav"><NavBar onSearch={(searchText) => setGameQuery({...gameQuery , searchText})} /></GridItem>
      <Show above="lg">
      <GridItem  padding={'10px'} area="aside" > <GenreList 
          onSelectGenre={(genre) => setGameQuery({...gameQuery ,genre})} selectedGenre={gameQuery.genre} /></GridItem>

      </Show>
      <GridItem area="main" >
        <Box  paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} ></GameHeading>
        <HStack spacing={5} marginBottom={5}>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder => setGameQuery({ ...gameQuery, sortOrder }))}></SortSelector>
        <PlatformSelector  onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        </HStack>
        </Box>
        
        <GameGrid gameQuery={gameQuery}   />
        </GridItem>

    </Grid>
  )
}

export default App