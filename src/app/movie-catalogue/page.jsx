"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import catalogueStyles from "@/styles/movie-card.module.css";

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
    <div>
      <h2>Movies:</h2>
      {movies.map((movie) => (
        <div key={movie.id} className={catalogueStyles.movie_card}>
          <h2>Title: {movie.title}</h2>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <Image
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            width={185}
            height={250}
            alt="Movie Poster"
          />
        </div>
      ))}
    </div>
  );
}
