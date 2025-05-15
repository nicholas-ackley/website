import React from "react";
import "./Blog.css";
import Instagram from "../images/instagram.png";
import LinkedIn from "../images/linkedin.png";
import GitHub from "../images/github.png";

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="contact-section">
        <h1>CONTACT ME</h1>
        <div className="underline">✻✻✻</div>
        <p>I'LL BE GLAD TO ANSWER YOUR QUESTIONS!</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your message"></textarea>
          <div className="form-footer">
            <button type="submit">Send Message</button>
          </div>
        </form>

        <div className="social-section">
          <h3>I AM SOCIAL</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/nicholas.ackley/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://github.com/nicholas-ackley">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-ackley/">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;