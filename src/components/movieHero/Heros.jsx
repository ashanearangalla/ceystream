import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import './hero.css';

const Heros = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=7fb6105252966f7e64d261ad7c5c8e2c");
      const data = await response.json();

      const moviesWithDetails = await Promise.all(
        data.results.map(async (movie) => {
          const detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7fb6105252966f7e64d261ad7c5c8e2c`);
          const details = await detailsResponse.json();
          const genres = details.genres.map(genre => genre.name);
          return { ...movie, runtime: details.runtime, genres };
        })
      );

      setMovies(moviesWithDetails);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <section className="home">
        <Hero movies={movies} />
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Heros;