import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Header() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar variant="dense">
        <p>SKATE REFEREE</p>
      </Toolbar>
    </AppBar>
  );
}
