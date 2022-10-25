import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { Reorder } from "@material-ui/icons";
import { useState } from "react";

function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false)

  return (
    <div className="navbar" id={expandNavbar ? 'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
          <Reorder/>
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
