import NewPostPage from "@/components/NewPostPage";
import { sql } from "@vercel/postgres";
import Image from "next/image";
import Rating from "@/components/Rating.jsx";
import { notFound } from "next/navigation";
import movieStyle from "@/styles/movie.module.css";
import Deletebtn from "@/components/Deletebtn";
import Update from "@/components/Update";


export default async function VideoPlayer({ params }) {
  const movieID = params.id;
  const apiKey = process.env.TMDB_API_KEY;
  let movie;
  let reviews;

  try {
    // Fetch movie by id from API
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`);
    if (response.ok) {
      movie = await response.json();
    } else {
      throw new Error("Movie not found");
    }
  } catch (error) {
    notFound();
  }

  try {
    // Fetch all reviews for the movie
    reviews = await sql`
      SELECT * FROM moviereviews WHERE movie_id = ${movieID}
    ;`;
  } catch (error) {
    throw new Error("Could not load reviews");
  }

  return (
    <main className={movieStyle.container}>
      <div className={movieStyle.info_container}>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>{movie.release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
        <Image src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} width={185} height={250} alt="Movie Poster" />
      </div>

      <h3>Reviews:</h3>
      <div className={movieStyle.reviews_container}>
        <ul>
          {reviews.rows.length === 0 ? (
            <div>
              <li>No reviews available</li>
            </div>
          ) : (
            reviews.rows.map((review) => (
              <div key={review.id}>
                <li>Rating: {review.rating} / 5</li>
                <li>Review: {review.review_text}</li>
                <li>Posted By: {review.username}</li>
                <li>Posted: {review.review_date.toLocaleString("en-GB")}</li>
                <Deletebtn review_id={review.review_id} movie_id={movieID} />
                <Update review_id={review.review_id} />
              </div>
            ))
          )}
        </ul>
      </div>

      <h3>Add Review:</h3>
      <div className={movieStyle.add_review_container}>
        <Rating />
        <NewPostPage movie_id={movie.id} />
      </div>
    </main>
  );
}
