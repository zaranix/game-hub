import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"


export interface Platform {
id : number,
name : string,
slug : string,

}
export interface Genre{
  name : string
  id : number
}

interface fetchGenreResponse{
  count : number ,
  results : Genre[]

}

const useGenres = () =>{
  const [Genre , setGenres] = useState<Genre[]>([])
  const [error , setError] = useState('')
  const [isLoading , setIsLoading] = useState(false)

  useEffect(() => {
   const controller = new AbortController(); 
   setIsLoading(true)
   apiClient
   .get<fetchGenreResponse>('/genres' , {signal : controller.signal})
   .then(res => {
    setGenres(res.data.results)
    setIsLoading(false)})
 
   .catch(err => { 
    if (err instanceof CanceledError) return;
    setError(err.message)
    setIsLoading(true)}
   )

  return () => controller.abort();
  },[])

  return {Genre , error , isLoading}
}

export default useGenres