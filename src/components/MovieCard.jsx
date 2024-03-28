import Image from "next/image";
import movieCardStyle from "@/styles/movie_card.module.css";

export default function MovieCard({ movie }) {
  let moviePosterSrc = `/images/image-not-found.png`;
  // Check if the API has image for the movie
  if (movie.poster_path !== null) {
    moviePosterSrc = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
  }

  return (
    <div key={movie.id} className={movieCardStyle.movie_container}>
      <Image
        aria-label={`${movie.title} poster`}
        className={movieCardStyle.image}
        src={moviePosterSrc}
        width={185}
        height={250}
        alt={`${movie.title} poster`}
      />
      <div className={movieCardStyle.text_container}>
        <p aria-label="Movie title" className="text-xl">
          {movie.title}
        </p>
        <p aria-label="Release Date" className="text-sm">
          {movie.release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}
        </p>
      </div>
    </div>
  );
}
