import React from "react";

export default function Resume() {
  const resumePath = "/path/to/your/resume.pdf";
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my Resume:{" "}
        <a href={resumePath} download="Gavin Meyer-Resume.pdf">
           Click Here
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
