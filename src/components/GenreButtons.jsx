import Link from "next/link";
import catalogueStyle from "@/styles/catalogue.module.css";

export default function GenreButtons() {
  return (
    <div className={catalogueStyle.genres_container}>
      <p>Genre:</p>
      <Link className="button" href={`/movie-catalogue`}>
        Trending
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=28`}>
        Action
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=16`}>
        Animation
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=35`}>
        Comedy
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=18`}>
        Drama
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=10751`}>
        Family
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=14`}>
        Fantasy
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=36`}>
        History
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=27`}>
        Horror
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=10749`}>
        Romance
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=53`}>
        Thriller
      </Link>
      <Link className="button" href={`/movie-catalogue?genreID=37`}>
        Western
      </Link>
    </div>
  );
}
