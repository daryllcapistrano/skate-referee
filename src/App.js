// import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import { Gameboard } from "./components/Displays";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/home">
          <Gameboard />
        </Route>
      </Switch>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </Router>
  );
}
