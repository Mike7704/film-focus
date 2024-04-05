import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import GenreButtons from "@/components/GenreButtons";
import MovieCard from "@/components/MovieCard";
import ChangePage from "@/components/ChangePage";
import catalogueStyle from "@/styles/catalogue.module.css";

export default async function Catalogue({ searchParams }) {
  const apiKey = process.env.TMDB_API_KEY;
  let response;
  let moviesData;
  let pageNum = 1;

  if (searchParams.page) {
    pageNum = searchParams.page;
  }

  try {
    if (searchParams.query) {
      response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams.query}&page=${pageNum}&api_key=${apiKey}`);
    } else if (searchParams.genreID) {
      response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&with_genres=${searchParams.genreID}&page=${pageNum}&api_key=${apiKey}`
      );
    } else {
      response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNum}&api_key=${apiKey}`);
    }
    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }
    moviesData = await response.json();
  } catch (error) {
    throw new Error("Failed to fetch movie data");
  }
  const movies = moviesData.results.slice(0, 16);
  const totalPages = moviesData.total_pages;

  return (
    <main className={catalogueStyle.page}>
      <SearchBar />
      <GenreButtons />
      <div className={catalogueStyle.movies_container}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <ChangePage currentPage={pageNum} totalPages={totalPages} query={searchParams.query} genreID={searchParams.genreID} />
    </main>
  );
}
