import React from "react";
import Star from "../../__atoms/star/star";
import Texts from "../../__molecules/texts/texts";
import Rating from "../../__molecules/rating/rating";
import Btn from "../../__molecules/button/btn";

function Main() {
  return (
    <>
      <div className="main-container">
        <Star />
        <Texts />
        <div className="ratings">
          <Rating number={1} />
          <Rating number={2} />
          <Rating number={3} />
          <Rating number={4} />
          <Rating number={5} />
        </div>
        <Btn />
      </div>
    </>
  );
}

export default Main;
