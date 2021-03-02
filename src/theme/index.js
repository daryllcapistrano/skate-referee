import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "JetBrains Mono, monospace",
  },
  palette: {
    type: "light",
    primary: {
      light: "#9d46ff",
      main: "#6200ea",
      dark: "#0a00b6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff9e40",
      main: "#ff6d00",
      dark: "#c43c00",
      contrastText: "#fff",
    },
  },
});
