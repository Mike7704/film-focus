"use client";
import { handleReviewUpdate } from "@/utils/utils";
import { useState } from "react";
import StarRating from "@/components/StarRating.jsx";
import SubmitReviewButton from "@/components/SubmitReviewButton";

export default function UpdateReviewButton({ review_id, movie_id, currentRating, currentReview }) {
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
          <form action={handleEditReview}>
            <StarRating initialRating={currentRating} />
            <label htmlFor="reviewText">review</label>
            <textarea id="reviewText" name="reviewText" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <SubmitReviewButton />
          </form>
          <button onClick={() => setShowForm(false)}>Close</button>
        </>
      ) : (
        <button onClick={() => setShowForm(true)}>Edit</button>
      )}
    </>
  );
}
