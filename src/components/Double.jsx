import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { CountContext } from "../contexts/count.context";
import styles from "./Double.module.css";

const { heading } = styles;

function Double() {
  const { value: val, changeValue } = useContext(CountContext);
  return (
    <div>
      <h1 className={heading}>Double</h1>
      <p>
        The double of {val} is {val * 2}
      </p>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => changeValue(val * 2)}
        startIcon={<DeleteIcon />}
      >
        Increment
      </Button>
    </div>
  );
}

export default Double;
