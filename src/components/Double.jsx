import React, { useContext } from "react";
import { CountContext } from "../contexts/count.context";
import styles from "./Double.module.css";

const {heading} = styles;

function Double() {
  const { value: val, changeValue } = useContext(CountContext);
  return (
    <div>
      <h1 className={heading}>Double</h1>
      <p>
        The double of {val} is {val * 2}
      </p>
      <button onClick={() => changeValue(val * 2)}>Increment</button>
    </div>
  );
}

export default Double;
