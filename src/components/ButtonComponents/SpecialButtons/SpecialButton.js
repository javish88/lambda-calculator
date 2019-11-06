import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="specialButton" onClick={() => props.clickSpecialProp(props.specialProp)}>
      {props.specialProp}
    </button>
  );
};

export default SpecialButton;