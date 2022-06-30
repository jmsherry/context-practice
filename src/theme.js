import { createTheme } from "@mui/material/styles";
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

export default theme;