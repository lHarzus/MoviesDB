import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          Movies<span className="db">DB</span>
        </Link>
        <i
          className="bi bi-three-dots-vertical toggle"
          onClick={() => setFlag(!flag)}
        ></i>
      </div>
      <div className={flag ? "navbar-options" : "navbar-options disabled"}>
        <Link to="/" className="link">
          Movies
        </Link>
        <Link to="/" className="link">
          Series
        </Link>
      </div>
    </div>
  );
};
