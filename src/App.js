import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "react-toastify/dist/ReactToastify.min.css";
import { grey } from "@material-ui/core/colors";

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
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Gameboard />
          </Route>
        </Switch>
        <div>
          <Link to="/home">Home</Link>
        </div>
      </Router>
    </ThemeProvider>
  );
}
