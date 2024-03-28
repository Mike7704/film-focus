"use client";
import { redirect } from "next/navigation";
import { ImSearch } from "react-icons/im";

export default function SearchBar() {
  function handleSearch(formData) {
    const searchQuery = formData.get("searchQuery");
    redirect(`/movie-catalogue?query=${searchQuery}`);
  }

  return (
    <form
      aria-label="SearchBar"
      action={handleSearch}
      className="flex items-center gap-2"
    >
      <ImSearch />
      <input
        aria-label="input"
        className="h-full"
        type="text"
        id="searchQuery"
        name="searchQuery"
        placeholder="Search..."
        required
      />
      <button
        role="button"
        aria-describedby="Search"
        aria-pressed="false"
        className="button"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
