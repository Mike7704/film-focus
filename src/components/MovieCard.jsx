import movieCardStyle from "@/styles/movie_card.module.css";
import Image from "next/image";

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
        <p>{movie.release_date}</p>
        {/* <p>{movie.overview}</p> */}
      </div>
    </div>
  );
}

// return (
//   <div key={movie.id} className={catalogueStyles.movie_card}>
//     <h2 className={catalogueStyles.movie_titile}>Title: {movie.title}</h2>
//     <p className={catalogueStyles.movie_overview}>Overview: {movie.overview}</p>
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
// );

// catalogue.module.css

// .container {
//   display: flex;
//   flex: 1;
//   flex-wrap: wrap;
//   gap: 10px;
//   padding: 10px;
// }

// .movie_container {
//   display: flex;
//   flex-direction: column;
//   width: 185px;
//   border: 2px solid white;
//   border-radius: 5px;
//   position: relative;
//   overflow: hidden;
// }

// .text_container {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.5);
//   color: white;
//   padding: 10px;
// }
// movie-catalogue page:

// export default function Card({ movie }) {
//   return (
//     <div key={movie.id} className={catalogueStyles.movie_container}>
//       <Image
//         className={catalogueStyles.image}
//         src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//         width={185}
//         height={250}
//         alt="Movie Poster"
//       />
//       <div className={catalogueStyles.text_container}>
//         <h2>{movie.title}</h2>
//         <p>{movie.release_date}</p>
//       </div>
//     </div>
//   );
// }
