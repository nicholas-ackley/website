import React, { useState, useEffect } from "react";
import "./ProfilePicture.css";
import Me from "../../images/me4.png";

export const Website = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [pause, setPause] = useState(false);

  const roles = ["Full-Stack Developer", "Software Engineer", "Web Designer"];

  useEffect(() => {
    if (pause) return;
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }
      if (!isDeleting && text === fullText) {
        setPause(true);
        setTimeout(() => {
          setIsDeleting(true);
          setPause(false);
        }, 1000);
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, pause]);

  return (
    <div className="hero-main">
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-text">
            <h5 className="hero-intro">Hello TESTINGWorld, I'm</h5>
            <h1 className="hero-name">Nicholas Ackley</h1>
            <h3 className="hero-roles">
              <span className="typewriter">{text}</span>
              <span className="cursor"></span>
            </h3>
            <h4 className="hero-subtext">Welcome to my personal portfolio 👋</h4>
          </div>
          <div className="hero-image-container">
            <img src={Me} alt="Nicholas Ackley" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
