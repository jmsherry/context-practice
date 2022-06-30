import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";

import "./App.css";
import { CountProvider } from "./contexts/count.context";
import { MenuProvider } from "./contexts/menu.context";
import Intervener from "./components/Intervener";
import NumberDisplay from "./components/NumberDisplay";
import DoubleSurround from "./components/DoubleSurround";
import theme from "./theme.js";

import HamburgerButton from "./components/HamburgerButton";
import NavDrawer from "./components/NavDrawer";

const navItems = ["Home", "About", "Contact"];

// const container = window !== undefined ? () => window().document.body : undefined;

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <AppBar>
            <Toolbar>
              <HamburgerButton />
              {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
              <NavDrawer navItems={navItems} />
            </Toolbar>
          </AppBar>
        </MenuProvider>
        <CountProvider>
          <Intervener>
            <Intervener>
              <Intervener>
                <NumberDisplay />
              </Intervener>
            </Intervener>
            <DoubleSurround />
          </Intervener>
        </CountProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
