import Image from "next/image";
import movieCardStyle from "@/styles/movie_card.module.css";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className={movieCardStyle.movie_container}>
      <Image
        className={movieCardStyle.image}
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        width={185}
        height={250}
        alt="Movie Poster"
      />
      <div className={movieCardStyle.text_container}>
        <h2>{movie.title}</h2>
        <p>{movie.release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
      </div>
    </div>
  );
}
