// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <header>
      <h1>Gavin Meyer</h1>
      <nav>
        <Link to="/">About</Link>
        <Link to="portfolio">Portfolio</Link>
        <Link to="contact">Contact</Link>
        <Link to="resume">Resume</Link>
      </nav>
    </header>
  );
}
