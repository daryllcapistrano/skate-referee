// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import { ToastContainer } from "react-toastify";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { grey } from "@material-ui/core/colors";
import "react-toastify/dist/ReactToastify.min.css";

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
      {/* <Header/> */}
      <Gameboard />
    </ThemeProvider>
  );
}
