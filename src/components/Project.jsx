import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Project.css";

export default function Project({ name, githubLink, deployedLink, image }) {
  const containerImage = {
    backgroundImage: `url(/images/${image})`,
  };

  return (
    <div className="container my-4 project-container" style={containerImage}>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2 className="project-name">{name}</h2>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGlobe} /> Deployed App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
