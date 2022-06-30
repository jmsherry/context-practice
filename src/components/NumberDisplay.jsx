import React from "react";
import Logger from "./Logger";
import Double from "./Double";

function NumberDisplay({val}) {
  return (
    <div>
      <Logger val={val} />
      <Double val={val} />
    </div>
  );
}

export default NumberDisplay;
