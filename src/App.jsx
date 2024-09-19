import { useSelector } from "react-redux"




function App() {
 const movies = useSelector((state)=>state.movies.list)
 console.log(movies)

  return (
    <>
      <h1>Movies:</h1>
      <ul>
      { movies ?
      movies.map(movie=>(
        <li key={movie.id}>{movie.title}</li>
      ))
      :null}

      </ul>
      
    </>
  )
}

export default App
