"use client";
import { useFormStatus } from "react-dom";
import { handleReviewUpdate } from "@/utils/update";
import { useState } from "react";
import StarRating from "@/components/StarRating.jsx";
import SubmitReviewButton from "@/components/SubmitReviewButton";

export default function UpdateReviewButton({ review_id, movie_id, newReviewText, newRating }) {
  const [showForm, setShowForm] = useState(false);
  const formStatus = useFormStatus();

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
            <StarRating />
            <label htmlFor="reviewText">review</label>
            <textarea id="reviewText" name="reviewText" />
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
