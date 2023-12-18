import useData from "./useData"

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

const useGames = () => useData<Game>('/games')

export default useGames