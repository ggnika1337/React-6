import React from "react";
import "./rating.css";

function Rating({ number }) {
  return (
    <>
      <div className="rating-container">{number}</div>
    </>
  );
}

export default Rating;
