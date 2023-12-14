import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
interface fetchGameResponse {
  count : number,
  results : Game[]
}
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

const useGames = () =>{
  const [games , setGames] = useState<Game[]>([])
  const [error , setError] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  useEffect(() => {
   const controller = new AbortController(); 
   setIsLoading(true)
   apiClient
   .get<fetchGameResponse>('/games' , {signal : controller.signal})
   .then(res => {
    setGames(res.data.results)
    setIsLoading(false)})
 
   .catch(err => { 
    if (err instanceof CanceledError) return;
    setError(err.message)
    setIsLoading(true)}
   )

  return () => controller.abort();
  },[])

  return {games , error , isLoading}
}

export default useGames