import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./Navbar.css";
import Github from "../../images/github.png";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="navbar-container">
      <div className="signature_container">
        <span><b>nicholasAckley();</b></span>
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li
            key={link.name}
            className="nav-item"
            style={{ animationDelay: `${index * 0.2}s` }} // Delay for each item
          >
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="github_container"
      >
        <img src={Github} alt="GitHub" className="github" />
      </a>
    </div>
  );
};

export default Navbar;
