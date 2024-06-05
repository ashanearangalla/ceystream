import React, { useEffect, useState } from 'react'

import Trending from '../components/trending/Trending'
import Movie from '../components/movieByCat/Movie'
import Heros from '../components/movieHero/Heros'



const HomePages = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [discoverMovies, setDiscoverMovies] = useState([])


  const getUpcomingMovies = async() => {

    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=7fb6105252966f7e64d261ad7c5c8e2c")
      const data = await response.json()
      
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`)
        const details = await detailsResponse.json()
        return { ...movie, runtime: details.runtime }
      }))
      
      setUpcomingMovies(moviesWithDetails)
    } catch(err) {
      console.error(err)
    }
    
  }

  const getNowPlayingMovies = async() => {

    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7fb6105252966f7e64d261ad7c5c8e2c")
      const data = await response.json()
      
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`)
        const details = await detailsResponse.json()
        return { ...movie, runtime: details.runtime }
      }))
      
      setNowPlayingMovies(moviesWithDetails)
    } catch(err) {
      console.error(err)
    }
    
  }

  const getTopRatedMovies = async() => {

    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7fb6105252966f7e64d261ad7c5c8e2c")
      const data = await response.json()
      
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`)
        const details = await detailsResponse.json()
        return { ...movie, runtime: details.runtime }
      }))
      
      setTopRatedMovies(moviesWithDetails)
    } catch(err) {
      console.error(err)
    }
    
  }

  const getDiscoverMovies = async() => {

    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=7fb6105252966f7e64d261ad7c5c8e2c")
      const data = await response.json()
      
      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
        const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`)
        const details = await detailsResponse.json()
        return { ...movie, runtime: details.runtime }
      }))
      
      setDiscoverMovies(moviesWithDetails)
    } catch(err) {
      console.error(err)
    }
    
  }

  useEffect(()=>{
    getUpcomingMovies()
    getNowPlayingMovies()
    getTopRatedMovies()
    getDiscoverMovies()
  },[])


    
  return (
    <>
        
        <Heros/>
        <Movie movies={nowPlayingMovies} title='Latest Movies'/>
        <Movie movies={upcomingMovies} title='Upcoming Movies'/>
        <Trending/>
        <Movie movies={topRatedMovies} title='Top Rated Movies'/>
        <Movie movies={discoverMovies} title='Discover Movies'/>
      
    </>

  )
}

export default HomePages
