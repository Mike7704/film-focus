"use client";
import { useFormStatus } from "react-dom";
import { handleReviewDelete } from "@/utils/utils";

export default function DeleteReviewButton({ movie_id, review_id }) {
  const formStatus = useFormStatus();

  return (
    <button className="button" onClick={() => handleReviewDelete(review_id, movie_id)} type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? "Deleting..." : "Delete"}
    </button>
  );
}
