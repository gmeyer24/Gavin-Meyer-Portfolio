// Bringing in the required import from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Nav() {

  const [toggleCollapsed, setToggleCollapsed] = useState(true);

  const handleToggleClick = () => {
    setToggleCollapsed(!toggleCollapsed);
  };

  const handleLinkClick = () => {
    setToggleCollapsed(true);
  };

  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container max-width-container">
        <NavLink to="/" className="navbar-brand">
          Gavin Meyer
        </NavLink>
        <button
          className={`navbar-toggler ${toggleCollapsed ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!toggleCollapsed}
          aria-label="Toggle navigation"
          onClick={handleToggleClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${toggleCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="portfolio" className="nav-link" onClick={handleLinkClick}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="contact" className="nav-link" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="resume" className="nav-link" onClick={handleLinkClick}>
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
