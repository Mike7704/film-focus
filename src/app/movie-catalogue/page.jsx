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
    <main className={catalogueStyle.container}>
      <h2>Movies:</h2>
      <div className={catalogueStyle.movies_container}>
        {movies.map((movie) => (
          <Link href={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </main>
  );
}
