"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ratingStyle from "@/styles/rating.module.css";

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={ratingStyle.container}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input className="hidden" type="radio" id="rating" name="rating" value={currentRating} onClick={() => setRating(currentRating)} />
            <FaStar
              className={ratingStyle.example}
              size={30}
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
