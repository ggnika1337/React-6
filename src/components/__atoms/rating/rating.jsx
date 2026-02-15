import React from "react";

function Rating({ number, className, onClick }) {
  return (
    <>
      <div onClick={onClick} className={className}>
        {number}
      </div>
    </>
  );
}

export default Rating;
