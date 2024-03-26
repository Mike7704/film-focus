"use client";
import { useFormStatus } from "react-dom";

export default function Update() {
  const formStatus = useFormStatus();

  return (
    <button type="submit" disabled={formStatus.pending}>
      {formStatus.pending ? "Updating post..." : "Update post"}
    </button>
  );
}
