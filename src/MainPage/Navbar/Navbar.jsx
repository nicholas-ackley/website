import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import Github from "../../images/github.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="signature_container">
        <span><b>nicholasAckley();</b></span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/website">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github_container">
        <img src={Github} alt="GitHub" className="github" />
      </a>
    </div>
  );
};

export default Navbar;
