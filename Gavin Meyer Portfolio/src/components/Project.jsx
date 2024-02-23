import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({ name, githubLink, deployedLink }){
    return (
        <div className="project-container">
        {/* <img
          src={`path/to/${name}_image.jpg`}
          alt={name}
          className="project-image"
        /> */}
        <div className="project-details">
          <h2>{name}</h2>
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
    )
}