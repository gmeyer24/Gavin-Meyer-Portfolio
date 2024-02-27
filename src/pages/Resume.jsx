import React from "react";
import "./Resume.css";

export default function Resume() {
  const resumeLink =
    "https://docs.google.com/document/d/1bxxkxIrs2Z-ziNNkrcaHj0-7sqVQ9MLT/edit?usp=sharing&ouid=107619649582159816173&rtpof=true&sd=true";

  return (
    <div className="container px-3 p-3 py-md-5 px-md-3 resume-container">
      <h1 className="mb-4">Resume</h1>
      <p>
        {" "}
        <a href={resumeLink} target="_blank" className="resume-link">
          View Resume
        </a>
      </p>
      <h2 className="resume-heading">TECHNICAL SKILLS</h2>
      <ul>
        <li>
          <strong>Languages:</strong> JavaScript, HTML/CSS, SQL, JSON
        </li>
        <li>
          <strong>Database Management:</strong> MySQL, MongoDB
        </li>
        <li>
          <strong>Web Development Frameworks and Libraries:</strong> Express,
          React, Node, Handlebars, jQuery, Bootstrap
        </li>
        <li>
          <strong>Development Tools & Platforms:</strong> Render, Heroku, Git,
          Bash, GitHub, Microsoft Office Suite
        </li>
      </ul>
    </div>
  );
}
