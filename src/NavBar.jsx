import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // optional: for styling

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/Popular-movie-checker" className="nav-link">
        Home
      </Link>
      <Link to="/favourates" className="nav-link">
        Favourites
      </Link>
    </nav>
  );
}

export default NavBar;
