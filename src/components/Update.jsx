"use client";
import { useFormStatus } from "react-dom";
import { handleReviewUpdate } from "@/utils/update";

export default function Update({
  review_id,
  movie_id,
  newReviewText,
  newRating,
}) {
  const formStatus = useFormStatus();

  return (
    <button
      onClick={() =>
        handleReviewUpdate(review_id, movie_id, newReviewText, newRating)
      }
      type="button"
      disabled={formStatus.pending}
    >
      {formStatus.pending ? "Updating post..." : "Update post"}
    </button>
  );
}
