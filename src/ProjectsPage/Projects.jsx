import React from "react";
import "./Projects.css";
import { FaGithub, FaShareAlt } from "react-icons/fa";

import Greek from "../images/toy.png";
import Website from "../images/website.png";
import Tinder from "../images/okc.png";
import Spot from "../images/spotify.png";
import Skybloom from '../images/skybloom.png'
import Traver from "../images/traver.png";

const Projects = () => {
  const projects = [
    {
      img: Website,
      name: "Personal Website (Updated)",
      desc: "A portfolio site showcasing my background, resume, and contact info.",
      tech: "React, CSS, JavaScript",
      github: "https://github.com/nicholas-ackley/portfolio",
      link: "https://nicholas-ackley.netlify.app/",
    },
    {
      img: Greek,
      name: "Toyota AI (HackUTD)",
      desc: "An AI Application that matches and filteres cars for users on trained models and data",
      tech: "SciKit, Open AI",
      github: "https://github.com/nicholas-ackley/hack-utd-toyota",
      link: "",
    },
    {
      img: Tinder,
      name: "OKC Thunder Tech Project",
      desc: "A full stack web app using Django REST to visualize player performance. Features real time data retrieval, dynamic stat aggregation, and API integration",
      tech: "FastAPI, Python, Typescript",
      github: "",
      link: "",
    },
    {
      img: Traver,
      name: "Traver Companies (Internship)",
      desc: "Full time Software Engineer",
      tech: "Python, REST API's",
      github: "",
      link: "",
    },
    {
      img: Spot,
      name: "Spotify Dashboard",
      desc: "Displays top songs and analytics pulled directly from the Spotify API.",
      tech: "React, FastAPI, Spotify API, Firebase",
      github: "",
      link: "",
    },
        {
      img: Skybloom,
      name: "Skybloom",
      desc: "Game in Development...",
      tech: "Godot, C#",
      github: "",
      link: "",
    },
  ];

  const colors = ["#020e03", "#ffffff", "#ffffff", "#1f4037", "#1DB954", "#0d0f20ff"];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Past Project Experience</h2>
      <p className="projects-subtitle">
        Explore the <span>projects I've worked on so far</span>
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div
              className="project-thumbnail"
              style={{ backgroundColor: colors[i % colors.length] }}
            >
              <img
                src={project.img}
                alt={project.name}
                className="project-image"
              />
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.desc}</p>
            <p className="project-tech">{project.tech}</p>

<div className="project-icons">
  <a
    href={project.github || "https://github.com/nicholas-ackley"}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="icon" />
  </a>

  {project.link && (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <FaShareAlt className="icon" />
    </a>
  )}
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
