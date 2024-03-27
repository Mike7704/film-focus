"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ratingStyle from "@/styles/rating.module.css";

export default function StarRating({ initialRating }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  return (
    <div className={ratingStyle.container}>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              className="hidden"
              type="radio"
              id="rating"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              required
            />
            <FaStar
              className={ratingStyle.star}
              size={30}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
