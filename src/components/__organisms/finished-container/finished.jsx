import React from "react";
import Phone from "../../../assets/images/phone.png";
import Texts from "../../__molecules/texts/texts";

function Finished({ selectedValue, style }) {
  return (
    <>
      <div style={style} className="main-container">
        <img className="phone-img" src={Phone} alt="phone-img" />
        <div className="result-container">
          You selected {selectedValue} out of 5
        </div>
        <Texts
          classname="center-texts"
          heading="How did we do?"
          description="Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!"
        />
      </div>
    </>
  );
}

export default Finished;
