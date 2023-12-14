import useGenres from "../hooks/useGenres"




const GenreList = () => {
  const {Genre} = useGenres()
  return (
 <ul>
  {Genre.map( g => <li key={g.id}>{g.name}</li>)}
 </ul>
  )
}

export default GenreList