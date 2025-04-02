import React from 'react'
import './Bio.css'
import Gib from '../images/gib.jpg'
//Image imports
import HTML from '../images/html-logo.png'
import Python from '../images/python-logo.png'
import Javascript from '../images/js-logo.png'
import CSS from '../images/css-logo.png'
import Traver from '../images/traver-logo.png'
import ReactLogo from '../images/react-logo.png'
import Swift from '../images/swift.png'
import CPlusPlus from '../images/c++.png'
const Bio = () => {
  return (
    <>
      <div className="about-me-background">
        <div className="aboutMe_Title">About me
          <div className="yellow_line"></div>
        </div>
        <div className="aboutMe_container">
        <div className="profilePic_container">
          <img src={Gib} alt="profilePic" className="profilePic_image"/>
        </div>
          {/* <div className="aboutMe_paragraph">
          <h3>Hi everyone! My name is Nicholas Ackley. I'm currently a student at the University of Texas at Dallas
            studying Computer Science and Music. In this website, you will find a collection of my projects, that 
            I have worked on in my free time. Creating these projects I combined both my passion for coding, as well as my take on simple
            yet clean designs.
          </h3>
          </div>
          <div className="aboutMe_paragraph2">
        <h3>
        I'm currently looking for internships in the field of software development. Here I have listed languages I have used 
        in my projects or as a Full Stack intern. For any inquiries for internships or full time offers, feel free to reach out to me!
        </h3>
       </div> */}
       
<div className="container">

    <div className="rectangle">
    <h3>Hi everyone! My name is Nicholas Ackley I'm currently a student at the University of Texas at Dallas
            studying Computer Science and Music. In this website, you will find a colle+ction of my projects, that 
            I have worked on in my free time. Creating these projects I combined both my passion for coding, as well as my take on simple
            yet clean designs.
          </h3>
    </div>
    <div className="rectangle">
    <h3>
        I'm currently looking for internships in the field of software development. Here I have listed languages I have used 
        in my projects or as a Full Stack intern. For any inquiries for internships or full time offers, feel free to reach out to me!
        </h3>
    </div>
   
  </div>
</div>
  
       </div>
       <div className="grid-container">
  <div className="box">
    <img src={HTML} alt="HTML Logo" />
    <span>HTML</span>
  </div>
  <div className="box">
    <img src={CSS} alt="CSS Logo" />
    <span>CSS</span>
  </div>
  <div className="box">
    <img src={Javascript} alt="JavaScript Logo" />
    <span>JavaScript</span>
  </div>
  <div className="box">
    <img src={ReactLogo} alt="React Logo" />
    <span>React</span>
  </div>
  <div className="box">
    <img src={Python} alt="Python Logo" />
    <span>Python</span>
  </div>
  <div className="box">
    <img src={Swift} alt="Swift Logo" />
    <span>Swift</span>
  </div>
  <div className="box">
    <img src={CPlusPlus} alt="C++ Logo" />
    <span>C++</span>
  </div>
  <div className="box">
    <img src={Traver} alt="Traver Companies" />
    <span>Traver Companies</span>
  </div>
  <div className="box">
    <img src="github-logo.png" alt="GitHub Logo" />
    <span>GitHub</span>
  </div>
  <div className="box">
    <img src="mips-logo.png" alt="MIPS Logo" />
    <span>MIPS</span>
  </div>
  <div className="box">
    <img src="csharp-logo.png" alt="C# Logo" />
    <span>C#</span>
  </div>
</div>
    
    </>
  )
}

export default Bio