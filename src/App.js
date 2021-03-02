import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer role="alert" />
      <CssBaseline />
      <Header />
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

export default App;
