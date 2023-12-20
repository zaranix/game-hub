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
//array of dependency
const useGames = (selectedGenre : Genre | null , selectedPlatform : Platform | null)  => useData<Game>('/games' , {params : {genres : selectedGenre?.id , platforms : selectedPlatform?.id}} , [selectedGenre?.id , selectedPlatform?.id])

export default useGames  