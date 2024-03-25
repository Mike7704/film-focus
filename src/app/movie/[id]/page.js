import NewPostPage from "@/components/NewPostPage";
import Image from "next/image";
import Rating from "@/components/Rating.jsx"
// import { useState } from "react";
// import { FaStart } from "react-icons/fa";

export default async function VideoPlayer({ params }) {
    const movieID = params.id;
    let movie;
    const apiKey = process.env.TMDB_API_KEY;
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`
        );
        movie = await response.json();

    } catch (error) {
        console.error("Error getting search results:", error);
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <Image
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                width={185}
                height={250}
                alt="Movie Poster"
            />
            <NewPostPage />
            <p>delete btn</p>
            <p>Modify btn</p>
            <Rating />
        </div>

    );

};


