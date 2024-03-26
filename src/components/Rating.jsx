"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Style from "@/styles/rating.module.css";
import { fromJSON } from "postcss";

export default function rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={Style.example}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className={Style.example}
              size={50}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Your rating is {rating}</p>
    </div>
  );
}
