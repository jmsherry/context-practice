import { createContext, useState } from "react";

export const CountContext = createContext({
  value: 1,
  changeValue: () => {}, // noop
});

export const CountProvider = (props) => {
  const [value, setValue] = useState(1);

  const changeValue = (n) => setValue(value + n);

  return (
    <CountContext.Provider
      value={{
        value,
        changeValue,
      }}
    >
      {props.children}
    </CountContext.Provider>
  );
};
