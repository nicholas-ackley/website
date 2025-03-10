import React from 'react'
import './Bio.css'
import Gib from '../images/gib.jpg'
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
            studying Computer Science and Music. In this website, you will find a collection of my projects, that 
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
       <div className="grid-container">
       <div className="box">HTML
       </div>
       <div className="box">CSS</div>
       <div className="box">Javascript</div>
       <div className="box">React</div>
       <div className="box">Python</div>
       <div className="box">Swift</div>
       <div className="box">C++</div>
       <div className="box">Traver Companies </div>
       <div className="box">Github</div>
       <div className="box">MIPS</div>
       <div className="box">C#</div>
      <div className="box">Github</div>
    </div>
      </div>
    
    </>
  )
}

export default Bio