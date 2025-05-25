import React, { useEffect, useState } from "react";

const API_KEY = "41c82f6c0c095339868ef17264ff7727";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results || []);
      })
      .catch((err) => {
        console.error("Failed to fetch data", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Popular Movies</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={`${IMAGE_URI}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h4>{movie.title}</h4>
            <p>{new Date(movie.release_date).getFullYear()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
