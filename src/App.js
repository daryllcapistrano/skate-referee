// import Header from "./components/Header";
import Landing from "./components/Landing";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer role="alert" />
      <CssBaseline />
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Gameboard />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
