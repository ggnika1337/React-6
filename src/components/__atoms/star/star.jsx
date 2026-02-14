import React from "react";
import "./star.css";
import InnerStar from "../../../assets/images/star.svg";

function Star() {
  return (
    <>
      <div className="oval">
        <img src={InnerStar} alt="" />
      </div>
    </>
  );
}

export default Star;
