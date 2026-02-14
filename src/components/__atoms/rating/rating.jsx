import React from "react";

function Rating({ number, className }) {
  return (
    <>
      <div className={className}>{number}</div>
    </>
  );
}

export default Rating;
