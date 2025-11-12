import React from 'react';
import './Bio.css';
import ProfilePic from '../images/profile.png';

const Bio = () => {
  const techStack = [
    { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg' },
    { name: 'SQL', src: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' },
    { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg' },
    { name: 'Tailwind', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' }
  ];

  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="about-line" />
          </div>

          <div className="about-content">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile" />
            </div>

            <div className="about-text">
<p>
  Hi, my name is <b>Nick</b> — a senior at the <i>University of Texas at Dallas</i> majoring in 
  Computer Science. I’m passionate about <b>Full-Stack Development</b>, <b>Data Management</b>, and <b>Machine Learning</b>.
</p>
<p>
  Outside of academics, I’ve worked on numerous personal and collaborative projects that have strengthened my software engineering skills. 
  I genuily enjoy problem solviong and creating products or applications for problems that I experience everyday. <br></br>I love what I do. 🙂
</p>

              <p className="inspired">Inspired by <i>@BagasRakha</i></p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-tabs">
          <button className="skills-tab active">Tech Stack</button>
          <button className="skills-tab">Tools</button>
        </div>

        <div className="skills-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="skill-card">
              <img src={tech.src} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Bio;
