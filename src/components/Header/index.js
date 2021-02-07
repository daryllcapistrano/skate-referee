import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header() {
  return (
    <AppBar position="static" elevation={0} color="secondary">
      <Toolbar>
        <h1>SKATE REFEREE</h1>
      </Toolbar>
    </AppBar>
  );
}
