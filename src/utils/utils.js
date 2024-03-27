"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function handleReviewDelete(reviewID, movieID) {
  await sql`DELETE FROM moviereviews WHERE review_id = ${reviewID}`;
  revalidatePath(`/movie/${movieID}`);
}

export async function handleReviewUpdate(reviewID, movieID, newReviewText, newRating) {
  await sql`UPDATE moviereviews 
  SET review_text = ${newReviewText}, rating = ${newRating}
  WHERE review_id = ${reviewID}`;
  revalidatePath(`/movie/${movieID}`);
}
