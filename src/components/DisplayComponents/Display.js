import React from "react";

const Display = (props) => {
  return <div className="display">
            <h1>{props.displayState}</h1>
          </div>
}

export default Display;