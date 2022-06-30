import React, {useContext} from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {MenuContext} from './../contexts/menu.context'

function HamburgerButton() {
  const {toggle} = useContext(MenuContext);
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={toggle}
      sx={{ mr: 2, display: { sm: "none" } }}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default HamburgerButton;
