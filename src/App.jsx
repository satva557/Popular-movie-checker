import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favourates from "./Pages/favourates"; // Ensure this exists
import NavBar from "./NavBar";

function MainPage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Popular-movie-checker" element={<Home />} />
        <Route path="/favourates" element={<Favourates />} />
      </Routes>
    </>
  );
}

export default MainPage;
