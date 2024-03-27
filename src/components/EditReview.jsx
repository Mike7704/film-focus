"use client";
import { handleReviewUpdate } from "@/utils/utils";
import { useState } from "react";
import StarRating from "@/components/StarRating.jsx";
import SubmitReviewButton from "@/components/SubmitReviewButton";
import DeleteButton from "@/components/DeleteReviewButton";
import movieStyle from "@/styles/movie.module.css";

export default function EditReview({ review_id, movie_id, currentRating, currentReview }) {
  const [inputText, setInputText] = useState(currentReview);
  const [showForm, setShowForm] = useState(false);

  async function handleEditReview(formData) {
    const reviewText = formData.get("reviewText");
    const rating = formData.get("rating");
    handleReviewUpdate(review_id, movie_id, reviewText, rating);
    setShowForm(false);
  }

  return (
    <>
      {showForm ? (
        <>
          <form className={movieStyle.add_review_form} action={handleEditReview}>
            <StarRating initialRating={currentRating} />
            <label htmlFor="reviewText">Review:</label>
            <textarea id="reviewText" name="reviewText" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <SubmitReviewButton />
          </form>
          <div className={movieStyle.edit_review_buttons}>
            <button className="button" onClick={() => setShowForm(false)}>
              Close
            </button>
            <DeleteButton review_id={review_id} movie_id={movie_id} />
          </div>
        </>
      ) : (
        <button className="button" onClick={() => setShowForm(true)}>
          Edit
        </button>
      )}
    </>
  );
}
