"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import ratingStyle from "@/styles/star_rating.module.css";

export default function StarRating({ initialRating, justDisplayStars }) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div className={ratingStyle.container}>
      {!justDisplayStars && <p>Rating:</p>}
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
              onClick={() => {
                !justDisplayStars && setRating(currentRating);
              }}
              required
            />
            <FaStar
              className={!justDisplayStars && ratingStyle.star}
              size={30}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => {
                !justDisplayStars && setHover(currentRating);
              }}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
