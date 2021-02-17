// import Header from "./components/Header";
import Landing from "./components/Landing";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
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
    </>
  );
}
