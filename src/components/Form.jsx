import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text"/>
        <label>Message</label>
        <textarea rows='6' placeholder="Message goes here..." />
        <button className="btn">Submit</button>
      </form>
      <p>I'll get back to you as soon as possible.</p>
    </div>
  );
};

export default Form;
