// Fetch movies from API
export async function GET() {
  //const apiKey = process.env.TMDB_API_KEY;
  //const apiAccountID = process.env.TMDB_ACCOUNT_ID;
  const apiAccessToken = process.env.TMDB_ACCESS_TOKEN;

  //const urlConfig = 'https://api.themoviedb.org/3/configuration'; // Returns valid image sizes etc.
  //const url = `https://api.themoviedb.org/3/discover/movie`;
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiAccessToken}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const movies = await res.json();

    console.log(movies);

    return new Response(JSON.stringify(movies));
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}
