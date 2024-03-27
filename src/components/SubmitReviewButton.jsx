"use client";
import { useFormStatus } from "react-dom";

export default function SubmitReviewButton() {
  const formStatus = useFormStatus();

  return (
    <button className="button" type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? "Submitting..." : "Submit"}
    </button>
  );
}
