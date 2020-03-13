import React from "react";
import "./css/Landing.css";

const Landing = () => {
  return (
    <div className="landing-container " style={{ textAlign: "center" }}>
      <h1 className="company-name">Emaily!</h1>
      <p className="intro-text ">
        Here at Emaily you can send a list of email addresses a survey and
        record their responses!
      </p>
    </div>
  );
};

export default Landing;
