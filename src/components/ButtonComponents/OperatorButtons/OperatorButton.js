import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="operatorButton" onClick={() => props.clickOperatorProp(props.operatorProp.value)}>
      {props.operatorProp.char}
    </button>
  );
};

export default OperatorButton;