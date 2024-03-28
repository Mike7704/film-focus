"use client";

export default function GlobalError({ error, reset }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-evenly">
      <h2 aria-label="Error" className="text-3xl">
        Error! Something went wrong!
      </h2>
      <p>{error.message}</p>
      <button role="button" aria-describedby="Try again" aria-pressed="false" className="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
