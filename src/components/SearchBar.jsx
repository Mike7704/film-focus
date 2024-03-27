"use client";
import { redirect } from "next/navigation";
import { ImSearch } from "react-icons/im";
import style from "@/styles/search_bar.module.css";

export default function SearchBar() {
  function handleSearch(formData) {
    const searchQuery = formData.get("searchQuery");
    redirect(`/movie-catalogue?query=${searchQuery}`);
  }

  return (
    <form action={handleSearch} className={style.div}>
      <div className={style.div2}>
        <ImSearch />
      </div>
      <input
        type="text"
        id="searchQuery"
        name="searchQuery"
        placeholder="Search..."
        required
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
