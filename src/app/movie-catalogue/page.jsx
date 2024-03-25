"use client";
import { useState, useEffect } from "react";
import catalogueStyle from "@/styles/catalogue.module.css";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";

export default function Catalogue() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const res = await fetch(`/api/movies`);
    const moviesRes = await res.json();
    setMovies(moviesRes.results);
  }

  return (
    <div className={catalogueStyle.container}>
      <h2>Movies:</h2>
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}

// {
/* // {movies.map((movie) => (
//   <div key={movie.id} className={catalogueStyles.movie_card}>
//     <h2 className={catalogueStyles.movie_titile}>Title: {movie.title}</h2>
//     <p className={catalogueStyles.movie_overview}>
//       Overview: {movie.overview}
//     </p>
//     <p className={catalogueStyles.movie_release_date}>
//       Release Date: {movie.release_date}
//     </p>
//     <Image
//       className={catalogueStyles.movie_image}
//       src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//       width={185}
//       height={250}
//       alt="Movie Poster"
//     />
//   </div>
// ))} */
//  }
