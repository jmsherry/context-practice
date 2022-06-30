import React, { useContext } from "react";
import { CountContext } from "../contexts/count.context";

function Logger() {
  const { value: val, changeValue } = useContext(CountContext);
  return (
    <div>
      <h1>Logger</h1>
      <p>{val}</p>
      <button onClick={() => changeValue(1)}>Increment</button>
    </div>
  );
}

export default Logger;
