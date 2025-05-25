import React, { useState } from "react";

const API_KEY = "41c82f6c0c095339868ef17264ff7727";
const IMAGE_URI = "https://image.tmdb.org/t/p/w500";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Fixed
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      setResults(data.results || []); // ✅ Fixed
    } catch (error) {
      console.error("Failed to search movies.", error);
    }

    setQuery("");
  };

  return (
    <div className="Search-box" style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // ✅ Fixed
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Search
        </button>
      </form>

      <h2 style={{ marginTop: "20px" }}>Results</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        {results.map((movie) => (
          <div key={movie.id} style={{ width: "200px" }}>
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_URI}${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h4>{movie.title}</h4>
            <p>
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMovies;
