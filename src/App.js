// import "./App.css";
import Header from "./components/Header";
import { Gameboard } from "./components/Displays";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Gameboard />
    </div>
  );
}

export default App;
