import React from 'react';
import './Bio.css';
import ProfilePic from '../images/profile.png'; // your uploaded image
const Bio = () => {
  return (
    <>
      {/* About Me Section */}
      <div className="hero-about">
        <div className="aboutme-container">
          <div className="aboutme-title">
            <h2>About Me</h2>
            <div className="aboutme-underline" />
          </div>

          <div className="aboutme-content">
            <div className="aboutme-image-container">
              <img
                src={ProfilePic}
                alt="Profile"
                className="aboutme-image"
              />
            </div>

            <div className="aboutme-text">
              <p className="aboutme-paragraph">
                Hi! My name is Nicholas Ackley. I'm a student at the <i>University of Texas at Dallas</i>, 
                studying Computer Science. I'm passionate about software development, especially full-stack 
                web and mobile applications. Whether I'm building responsive interfaces or creating backend 
                logic, I enjoy turning creative ideas into real, working code.
              </p>
              <p className="aboutme-paragraph">
                Outside of school, I’ve taken on many personal and team based projects that have 
                 improved my skills as a software engineer, and am always looking for new challenges.
                I'm always eager to learn new technologies, explore innovative tools, and contribute to 
                meaningful projects. My goal is to build
                impactful software that’s not only functional, but also user centered and thoughtfully 
                designed.              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <div className="skills-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-tabs">
          <button className="skills-tab active">Tech Stack</button>
          <button className="skills-tab">Tools</button>
        </div>

        <div className="skills-grid">
          {[
            { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
          ].map((tech, index) => (
            <div key={index} className="skill-card">
              <img src={tech.src} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bio;
