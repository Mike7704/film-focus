"use client";
import { useFormStatus } from "react-dom";

export default function SubmitReviewButton() {
  const formStatus = useFormStatus();

  return (
    <button
      role="button"
      aria-describedby="submit"
      aria-pressed="false"
      className="button"
      type="submit"
      disabled={formStatus.pending}
    >
      {formStatus.pending ? "Submitting..." : "Submit"}
    </button>
  );
}
