import React, {useState, useEffect} from 'react'
import './trending.css'

import Hero from '../movieHero/Hero'

export default function Trending() {

  const [movies, setMovies] = useState([])
  const getMovies = async() => {

    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7fb6105252966f7e64d261ad7c5c8e2c")
      const data = await response.json()
      
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`)
        const details = await detailsResponse.json()
        return { ...movie, runtime: details.runtime }
      }))
      
      setMovies(moviesWithDetails)
    } catch(err) {
      console.error(err)
    }
    
  }

  useEffect(()=>{
    getMovies()
  },[])

  return (
    <>
     <section className="trending">
        <Hero movies={movies} />
     </section>
    </>
  )
}
