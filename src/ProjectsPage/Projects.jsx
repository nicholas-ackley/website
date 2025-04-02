import React from "react";
import "./Projects.css";
import Greek from "../images/greekpop.png";
import Website from "../images/website.png";
import Tinder from "../images/tinder.svg";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Past Project Experience</h2>
      <p className="projects-subtitle">
        Explore the <span>projects I've worked on so far</span>
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-thumbnail">
            <img
              src={Website}
              alt="Personal Website"
              className="project-image"
            />
          </div>
          <h3 className="project-name">Personal Website</h3>
          <p className="project-description">
            A portfolio site showcasing my background, resume, and contact info.
          </p>
          <p className="project-tech">React, CSS, JavaScript</p>
        </div>

        <div className="project-card">
          <div className="project-thumbnail">
            <img src={Greek} alt="Sahabat Muslim" className="project-image" />
          </div>
          <h3 className="project-name"> Greek-Pop</h3>
          <p className="project-description">
            An App where merchandise can be resold and reused for college
            students.
          </p>
          <p className="project-tech">React Native, Firebase</p>
        </div>

        <div className="project-card">
          <div className="project-thumbnail">
            <img src={Tinder} alt="SISTEKDES" className="project-image" />
          </div>
          <h3 className="project-name">Tinder Replica</h3>
          <p className="project-description">
            A replica web application of Tinder
          </p>
          <p className="project-tech">Firebase, React</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
