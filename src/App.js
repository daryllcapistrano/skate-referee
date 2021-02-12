import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import { Gameboard } from "./components/Displays";
import { ToastContainer } from "react-toastify";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// import "./App.css";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <ToastContainer />
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
