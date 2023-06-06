import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="navbar-logo">
          <Link to="/">
            Movies<span className="db">DB</span>
          </Link>
        </div>
        <Link to="/" className="link">
          Movies
        </Link>
        <Link to="/" className="link">
          Series
        </Link>
        <a href="https://www.themoviedb.org/" className="link">
          TMDB
        </a>
      </div>
      <p>&#169; 2023 MoviesDB | inspired by TMDB website</p>
    </div>
  );
};
