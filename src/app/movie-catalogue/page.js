import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import catalogueStyle from "@/styles/catalogue.module.css";
import ChangePage from "@/components/ChangePage";

export default async function Catalogue({ searchParams }) {
  const apiKey = process.env.TMDB_API_KEY;
  let response;
  let moviesData;
  let pageNum = 1;

  if (searchParams.page) {
    pageNum = searchParams.page;
  }

  if (searchParams.query) {
    response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams.query}&page=${pageNum}&api_key=${apiKey}`);
  } else {
    response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pageNum}&api_key=${apiKey}`);
  }
  moviesData = await response.json();
  const movies = moviesData.results.slice(0, 16);
  const totalPages = moviesData.total_pages;

  return (
    <main className={catalogueStyle.page}>
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
      <ChangePage currentPage={pageNum} totalPages={totalPages} query={searchParams.query} />
    </main>
  );
}
