import React from "react";
import Star from "../../__atoms/star/star";
import Texts from "../../__molecules/texts/texts";
import Rating from "../../__atoms/rating/rating";
import Btn from "../../__atoms/button/btn";

function Main() {
  return (
    <>
      <div className="main-container">
        <Star />
        <Texts />
        <div className="ratings-btn">
          <div className="ratings">
            <Rating number={1} className="off" />
            <Rating number={2} className="off" />
            <Rating number={3} className="off" />
            <Rating number={4} className="off" />
            <Rating number={5} className="off" />
          </div>
          <Btn />
        </div>
      </div>
    </>
  );
}

export default Main;
