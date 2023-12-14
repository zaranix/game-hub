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
slug : string
}
export interface Game {
  id : number,
  name : string,
  background_image :string
  //Platform is the array of object where each object has property called Platform with type Platform #Design smell
  parent_platforms :  {platform : Platform}[]
}

const useGames = () =>{
  const [games , setGames] = useState<Game[]>([])
  const [error , setError] = useState('')

  useEffect(() => {
   const controller = new AbortController(); 

   apiClient
   .get<fetchGameResponse>('/games' , {signal : controller.signal})
   .then(res => setGames(res.data.results))
 
   .catch(err => { 
    if (err instanceof CanceledError) return;
    setError(err.message)}
   )

  return () => controller.abort();
  },[])

  return {games , error}
}

export default useGames