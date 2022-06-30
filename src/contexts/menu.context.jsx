import { createContext, useState } from "react";

export const MenuContext = createContext({
  isOpen: false,
  open: () => {}, // noop
  close: () => {},
  toggle: () => {},
});

export const MenuProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
