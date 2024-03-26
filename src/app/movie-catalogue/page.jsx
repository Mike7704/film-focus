"use client";
import { useState, useEffect } from "react";
import catalogueStyle from "@/styles/catalogue.module.css";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Catalogue({ searchParams }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    let res;
    let moviesRes;
    if (searchParams.query) {
      res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams.query}&api_key=5ce82a49ce51b8b8835fd081ca4e815a`);
    } else {
      res = await fetch(`/api/movies`);
    }
    moviesRes = await res.json();
    setMovies(moviesRes.results);
  }

  return (
    <main className={catalogueStyle.container}>
      <h2>Movies:</h2>
      <SearchBar />
      <div className={catalogueStyle.movies_container}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
