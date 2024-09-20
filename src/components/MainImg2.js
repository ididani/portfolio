import React, { Component } from "react";
import "./MainImg2.css";

class MainImg2 extends Component {
  render() {
    return (
      <div className="main-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default MainImg2;
