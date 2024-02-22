import React from "react";

export default function Resume() {
  const resumeLink = "https://docs.google.com/document/d/1bxxkxIrs2Z-ziNNkrcaHj0-7sqVQ9MLT/edit?usp=sharing&ouid=107619649582159816173&rtpof=true&sd=true";
  return (
    <div>
      <h1>Resume</h1>
      <p>
        {" "}
        <a href={resumeLink} target="_blank">
           View Resume
        </a>
      </p>
      <h2>TECHNICAL SKILLS</h2>
      <p>
        Languages: JavaScript, HTML/CSS, SQL, JSON Database Management: MySQL,
        MongoDB Web Development Frameworks and Libraries: Express, React, Node,
        Handlebars, jQuery, Bootstrap Development Tools & Platforms: Render,
        Heroku, Git, Bash, GitHub, Microsoft Office Suite
      </p>
    </div>
  );
}


