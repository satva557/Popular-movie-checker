import React from "react";
import NavBar from "../NavBar"; // Make sure NavBar is used!
import Movies from "../services"; // This should export a React component
import SearchMovies from "../SearchBar";

function Home() {
  return (
    <div className="Movie-Main-page">
      <SearchMovies /> {/* Search input & results */}
      <Movies /> {/* Popular movies section */}
    </div>
  );
}

export default Home;
