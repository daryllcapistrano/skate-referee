import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { IconContext } from "react-icons";
import { GiWhistle } from "react-icons/gi";

const useStyles = makeStyles({
  center: { alignSelf: "center" },
  title: {
    color: "#ffeb3b",
    margin: ".2em",
    marginLeft: ".5em",
    fontSize: "2.5em",
    textTransform: "uppercase",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={1} color="primary">
      <Toolbar variant="dense" className={classes.center}>
        <IconContext.Provider value={{ color: "#ffeb3b", size: "3em" }}>
          <GiWhistle />
        </IconContext.Provider>
        <h1 className={classes.title}>skate referee</h1>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
