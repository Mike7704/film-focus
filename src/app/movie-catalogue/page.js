import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import catalogueStyle from "@/styles/catalogue.module.css";

export default async function Catalogue({ searchParams }) {
  //const [movies, setMovies] = useState([]);

  const apiKey = process.env.TMDB_API_KEY;
  let response;
  let moviesData;
  if (searchParams.query) {
    response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchParams.query}&api_key=${apiKey}`);
  } else {
    response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`);
  }
  moviesData = await response.json();
  const movies = moviesData.results;
  const totalPages = moviesData.total_pages;
  console.log(searchParams);

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
