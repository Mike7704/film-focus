"use client";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import style from "@/styles/search_bar.module.css";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = process.env.TMDB_API_KEY;
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=5ce82a49ce51b8b8835fd081ca4e815a`);
      const data = await response.json();
      console.log(apiKey);
      console.log(data);
      setSearchResults(data.results.rows);
    } catch (error) {
      console.error("Error getting search results:", error);
    }
  };

  return (
    <div className={style.div}>
      <div className={style.div2}>
        <ImSearch />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onClick={handleSearch}
        onChange={(e) => setValue(e.target.value)}
        className={style.input}
      />
      {/* Show search results */}
      {searchResults && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
