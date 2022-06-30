import React, { useContext } from "react";
import Button from '@mui/material/Button';

import { CountContext } from "../contexts/count.context";

function Logger() {
  const { value: val, changeValue } = useContext(CountContext);
  return (
    <div>
      <h1>Logger</h1>
      <p>{val}</p>
      <Button onClick={() => changeValue(1)}>Increment</Button>
    </div>
  );
}

export default Logger;
