// import Header from "./components/Header";
import Landing from "./components/LandingPage";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { grey } from "@material-ui/core/colors";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      text: {
        primary: grey[50],
      },
      background: {
        default: grey[900],
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer role="alert" limit={2} />
      <CssBaseline />
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route path="/home">
            <Gameboard />
          </Route>
          <Route path="/">
            <Landing />
            <Link to="/home">enter</Link>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
