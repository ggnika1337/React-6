import React, { useState } from "react";
import Star from "../../__atoms/star/star";
import Texts from "../../__molecules/texts/texts";
import Rating from "../../__atoms/rating/rating";
import Finished from "../finished-container/finished";

function Main() {
  const [value, setValue] = useState("0");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Finished selectedValue={value} />;
  }
  return (
    <>
      <div className="main-container">
        <Star />
        <Texts
          classname="texts-container"
          heading="How did we do?"
          description="Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!"
        />
        <div className="ratings-btn">
          <div className="ratings">
            <Rating onClick={() => setValue("1")} number={1} className="off" />
            <Rating onClick={() => setValue("2")} number={2} className="off" />
            <Rating onClick={() => setValue("3")} number={3} className="off" />
            <Rating onClick={() => setValue("4")} number={4} className="off" />
            <Rating onClick={() => setValue("5")} number={5} className="off" />
          </div>
          <button onClick={() => setSubmitted(true)} className="btn">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
