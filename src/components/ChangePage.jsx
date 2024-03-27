"use client";
import Style from "@/styles/ChangePage.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function ChangePage({ currentPage, totalPages, url }) {
  const currentPageNum = parseInt(currentPage, 10);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const previoustPageNumber = currentPageNum - 1;
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
          className="button "
          href={`/movie-catalogue?page=${previoustPageNumber}`}
        >
          Before
        </Link>
      )}
      {showNextButton && (
        <Link
          className="button "
          href={`/movie-catalogue?page=${nextPageNumber}`}
        >
          Next
        </Link>
      )}
    </div>
  );
}
