import React from "react";
import "./texts.css";

function Texts({ heading, description, classname }) {
  return (
    <>
      <div className={classname}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Texts;
