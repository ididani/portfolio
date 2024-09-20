import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import project1 from "../assets/main-img.jpg";
import project2 from "../assets/main-img.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>
          I'm a full-stack developer. I create responsive secure websites for my
          clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={project1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={project2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
