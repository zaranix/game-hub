import useData from "./useData"
import { Genre } from "./useGenres"

export interface Platform {
id : number,
name : string,
slug : string,

}

export interface Game {
  id : number,
  name : string,
  background_image :string
  //Platform is the array of object where each object has property called Platform with type Platform #Design smell
  parent_platforms :  {platform : Platform}[]
  metacritic : number
}
//params => property of axios request object
//pass selectedgenre   as a query string parameter to the data hook
const useGames = (selectedGenre : Genre | null) => useData<Game>('/games' , {params : {genres : selectedGenre?.id}} , [selectedGenre?.id])

export default useGames  