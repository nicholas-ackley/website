import React, { useState, useEffect } from "react";

import "./ProfilePicture.css";
import Me from "../../images/me.png";
import 'aos/dist/aos.css';
export const ProfilePicture = () => {
  const [text, setText] = useState(""); // Current text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Whether we're deleting
  const [loopNum, setLoopNum] = useState(0); // Tracks the current word
  const [typingSpeed, setTypingSpeed] = useState(150); // Typing/deleting speed
  const [pause, setPause] = useState(false); // Pauses at the end of a word

  const words = ["Full-Stack Developer", "Software Engineer", "Web Designer"]; // Words to display

  useEffect(() => {
    if (pause) return; // If pause is active, skip typing/deleting

    const handleTyping = () => {
      const current = loopNum % words.length; // Get the current word index
      const fullText = words[current];

      if (isDeleting) {
        // Remove characters
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // Add characters
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      // If the word is fully typed out
      if (!isDeleting && text === fullText) {
        setPause(true); // Pause before deleting
        setTimeout(() => {
          setIsDeleting(true); // Start deleting after pause
          setPause(false);
        }, 1000); // 1000ms pause
      }

      // If the word is fully deleted
      if (isDeleting && text === "") {
        setIsDeleting(false); // Start typing the next word
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [text, isDeleting, typingSpeed, loopNum, pause]);

  return (
    <>
<div class="main-container">
  <div class="card">
    <div class="title-and-circle">
      <div class="titles">
        <h5 class="title1">Hello World, I'm</h5>
        <h1 class="title2">Nicholas Ackley</h1>
        <h3 class="typewriter_container">
          <span className="typewriter">{text}</span>
          <span className="cursor"></span>
        </h3>
          <h4 className="title3" style={{ fontWeight: 'bold' }}>
            Welcome to my personal portfolio 👋
          </h4>
      </div>
      <div className="circle">
        <img src={Me} alt="Nicholas Ackley" className="circle-image" />
      </div>
    </div>
  </div>
</div>



    </>
  );
};

export default ProfilePicture;
