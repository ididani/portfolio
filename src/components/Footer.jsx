import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            ></FaHome>
            <div>
              <p>Teodor Keko Street</p>
              <p>Tirana</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaPhone>
              +355 69 2091 321
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaMailBulk>
              anxdidani@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>XXX Inc.</h4>
          <p>This is me, CEO of XXX Inc. I enjoy discussing new projects.</p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaInstagram>
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaLinkedin>
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            ></FaGithub>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
