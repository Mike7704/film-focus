import NewPostPage from "@/components/NewPostPage";
import { sql } from "@vercel/postgres";
import Image from "next/image";
import Rating from "@/components/Rating.jsx"
// import { useState } from "react";
// import { FaStart } from "react-icons/fa";

export default async function VideoPlayer({ params }) {
  const movieID = params.id;
  const apiKey = process.env.TMDB_API_KEY;
  let movie;
  let reviews;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`);
    movie = await response.json();
  } catch (error) {
    console.error("Error getting search results:", error);
  }

  try {
    reviews = await sql`
      SELECT * FROM moviereviews WHERE movie_id = ${movieID}
    ;`;
  } catch (error) {
    throw new Error("Could not load reviews");
  }
  
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <Image src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} width={185} height={250} alt="Movie Poster" />

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
            </div>
          ))
        )}
      </ul>


      <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <Image
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                width={185}
                height={250}
                alt="Movie Poster"
            />
            <NewPostPage />
            <p>delete btn</p>
            <p>Modify btn</p>
            <Rating />
        </div>

    </div>
  );
}