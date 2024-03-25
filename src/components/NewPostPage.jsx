import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { currentUser } from "@clerk/nextjs";
import SavePostButton from "@/components/SavePostButton";

export default function NewPostPage({ movie_id }) {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const reviewText = formData.get("reviewText");
    const user = await currentUser();
    const testRating = 5;

    await sql`INSERT INTO MovieReviews (user_id, username, movie_id, rating, review_text) VALUES (
      ${user.id}, 
      ${user.username}, 
      ${movie_id}, 
      ${testRating}, 
      ${reviewText}
      );`;
    console.log("Post saved!");
    revalidatePath("/");
    redirect("/");
  }

  return (
    <form action={handleSavePost}>
      <label htmlFor="review">review</label>
      <textarea id="reviewText" name="reviewText" />
      <SavePostButton />
    </form>
  );
}
