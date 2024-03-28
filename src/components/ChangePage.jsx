"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ChangePage({ currentPage, totalPages, query }) {
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
        <Link className="button " href={`/movie-catalogue${query ? `?query=${query}&` : "?"}page=${previousPageNumber}`}>
          Previous
        </Link>
      )}
      {showNextButton && (
        <Link className="button " href={`/movie-catalogue${query ? `?query=${query}&` : "?"}page=${nextPageNumber}`}>
          Next
        </Link>
      )}
    </div>
  );
}
