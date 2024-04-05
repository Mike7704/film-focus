"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ChangePage({ currentPage, totalPages, query, genreID }) {
  const currentPageNum = parseInt(currentPage, 10);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const previousPageNumber = currentPageNum - 1;
  const nextPageNumber = currentPageNum + 1;

  useEffect(() => {
    if (currentPageNum > 1) {
      setShowPreviousButton(true);
    } else {
      setShowPreviousButton(false);
    }

    if (currentPageNum < totalPages) {
      setShowNextButton(true);
    } else {
      setShowNextButton(false);
    }
  }, [currentPageNum]);

  return (
    <div className="flex gap-5">
      {showPreviousButton && (
        <Link
          role="button"
          aria-describedby="Previous"
          aria-pressed="false"
          className="button"
          href={`/movie-catalogue${query ? `?query=${query}&` : "?"}${genreID ? `genreID=${genreID}&` : ""}page=${previousPageNumber}`}
        >
          Previous
        </Link>
      )}
      {showNextButton && (
        <Link
          role="button"
          aria-describedby="Next"
          aria-pressed="false"
          className="button"
          href={`/movie-catalogue${query ? `?query=${query}&` : "?"}${genreID ? `genreID=${genreID}&` : ""}page=${nextPageNumber}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
