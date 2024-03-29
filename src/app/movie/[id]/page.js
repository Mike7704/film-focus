import { sql } from "@vercel/postgres";
import { currentUser, SignInButton, SignUpButton } from "@clerk/nextjs";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import StarRating from "@/components/StarRating.jsx";
import SubmitReviewButton from "@/components/SubmitReviewButton";
import EditReview from "@/components/EditReview";
import movieStyle from "@/styles/movie.module.css";

export default async function Movie({ params }) {
  const user = await currentUser();
  const apiKey = process.env.TMDB_API_KEY;
  const movieID = params.id;
  let movie;
  let isMovieBackground = false;
  let moviePosterSrc = `/images/image-not-found.png`;
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

  // Check if the API has images for the movie
  if (movie.backdrop_path !== null) {
    isMovieBackground = true;
  }
  if (movie.poster_path !== null) {
    moviePosterSrc = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
  }

  async function handleSaveReview(formData) {
    "use server";
    try {
      const reviewText = formData.get("reviewText");
      const rating = formData.get("rating");

      await sql`INSERT INTO MovieReviews (user_id, username, movie_id, rating, review_text) VALUES (
      ${user?.id}, 
      ${user?.username}, 
      ${movieID}, 
      ${rating}, 
      ${reviewText}
    );`;

      revalidatePath(`/movie/${movieID}`);
    } catch (error) {
      throw new Error("Could not save review");
    }
  }

  // Validate reviews on refresh
  revalidatePath(`/movie/${movieID}`);

  return (
    <main className={movieStyle.page}>
      {isMovieBackground && (
        <>
          <div className={movieStyle.background_black}></div>
          <Image
            aria-label="movie image"
            className={movieStyle.background_image}
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            width={1280}
            height={720}
            alt={`${movie.title} background`}
          />
        </>
      )}
      <div className={movieStyle.header_container}>
        <h2 aria-label="movie title" className={movieStyle.title}>
          {movie.title}
        </h2>
        <p aria-label="movie description" className={movieStyle.description}>
          {movie.tagline}
        </p>
        <p aria-label="movie description" className={movieStyle.description}>
          {movie.overview}
        </p>
      </div>

      <div className={movieStyle.info_container}>
        <Image aria-label="movie image" className={movieStyle.poster} src={moviePosterSrc} width={400} height={598} alt={`${movie.title} poster`} />
        <div className={movieStyle.info_text_container}>
          <h3 aria-label="rating" className={movieStyle.subheading}>
            Our Rating:
          </h3>
          <StarRating initialRating={Math.round(movie.vote_average / 1.8)} justDisplayStars={true} />
          <h3 aria-label="Genre" className={movieStyle.subheading}>
            Genre:
          </h3>
          <div>
            {movie.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <h3 aria-label="release date" className={movieStyle.subheading}>
            Release Data:
          </h3>
          <p>{movie.release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>

          <h3 aria-label="runtime" className={movieStyle.subheading}>
            Runtime:
          </h3>
          <p aria-label="minutes">{movie.runtime} minutes</p>
          <h3 aria-label="budget" className={movieStyle.subheading}>
            Budget:
          </h3>
          <p>${movie.budget.toLocaleString()}</p>
        </div>
      </div>

      <h3 aria-label="reviews" className={movieStyle.subheading}>
        Reviews
      </h3>
      <div className={movieStyle.reviews_container}>
        {reviews.rows.length === 0 ? (
          <div className={movieStyle.review}>
            <p aria-label="No reviews available" className="text-center">
              No reviews available
            </p>
          </div>
        ) : (
          reviews.rows.map((review) => (
            <div className={movieStyle.review} key={review.review_id}>
              <p>{review.review_text}</p>
              <StarRating initialRating={review.rating} justDisplayStars={true} />
              <p aria-label="reviews available" reviews available>
                Reviewed by: {review.username}
              </p>
              <p aria-label="Posted">Posted: {review.review_date.toLocaleString("en-GB")}</p>
              {user && user?.id === review.user_id && (
                <div className={movieStyle.edit_review_container}>
                  <EditReview review_id={review.review_id} movie_id={movieID} currentRating={review.rating} currentReview={review.review_text} />
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <h3 aria-label="Add Review" className={movieStyle.subheading}>
        Add Review
      </h3>
      {user ? (
        <div className={movieStyle.add_review_container}>
          <form className={movieStyle.add_review_form} action={handleSaveReview}>
            <StarRating />
            <label aria-label="label" htmlFor="reviewText">
              Review:
            </label>
            <textarea id="reviewText" name="reviewText" required />
            <SubmitReviewButton />
          </form>
        </div>
      ) : (
        <div className={movieStyle.review}>
          <p aria-label="Not logged in" className="text-center">
            You need to be logged in to add a review.
          </p>
          <SignInButton className="button">Sign in</SignInButton>
          <SignUpButton className="button">Sign up</SignUpButton>
        </div>
      )}
    </main>
  );
}
