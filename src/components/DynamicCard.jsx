import React from "react";
import "./DynamicCard.css";

const DynamicCard = () => {
  return (
    <div>
      <div className="card-container">
        <a className="card card-1" href="">
          <div className="card-content">
            <span className="badge first">React</span>
            <span className="badge second">MongoDB</span>
            <h2 className="title">E-commerce website</h2>
            <p className="date">September 2024</p>
          </div>
        </a>

        <a className="card card-2" href="">
          <div className="card-content">
            <span className="badge first">React</span>
            <span className="badge second">MongoDB</span>
            <h2 className="title">E-commerce website</h2>
            <p className="date">September 2024</p>
          </div>
        </a>

        <a className="card card-3" href="">
          <div className="card-content">
            <span className="badge first">React</span>
            <span className="badge second">MongoDB</span>
            <span className="badge third">NodeJs</span>
            <h2 className="title">E-commerce website</h2>
            <p className="date">September 2024</p>
          </div>
        </a>
     
      <a className="card card-4" href="">
        <div className="card-content">
          <span className="badge first">React</span>
          <span className="badge second">MongoDB</span>
          <h2 className="title">E-commerce website</h2>
          <p className="date">September 2024</p>
        </div>
      </a>

      <a className="card card-5" href="">
        <div className="card-content">
          <span className="badge first">React</span>
          <span className="badge second">MongoDB</span>
          <span className="badge third">JavaScript</span>
          <span className="badge forth">PHP</span>
          <h2 className="title">E-commerce website</h2>
          <p className="date">September 2024</p>
        </div>
      </a>

      <a className="card card-6" href="">
        <div className="card-content">
          <span className="badge first">HTML</span>
          <span className="badge second">CSS</span>
          <h2 className="title">E-commerce website</h2>
          <p className="date">September 2024</p>
        </div>
      </a>
      </div>
    </div>
  );
};

export default DynamicCard;
