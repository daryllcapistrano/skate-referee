import { makeStyles } from "@material-ui/styles";
import { Box, Paper } from "@material-ui/core";
import Scoreboard from "../Scoreboard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    margin: "2em 1.25em",
  },
  playerTurn: {
    color: "grey",
    fontSize: "1em",
  },
  winnerText: {
    margin: "auto",
    paddingTop: "1em",
  },
  text: {
    width: "9em",
    fontSize: "1.5em",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  trickText: {
    textTransform: "uppercase",
  },
  flex: {
    display: "inline-flex",
    justifyContent: "space-around",
  },
});

const Display = (props) => {
  const classes = useStyles();
  const trickSuggestion = props.suggestedTrick;

  return (
    <Paper className={classes.root} elevation={3}>
      <p className={classes.winnerText}>{props.winner}</p>
      <Box className={classes.flex}>
        <Scoreboard playerOne={props.playerOne} />
        <Scoreboard playerTwo={props.playerTwo} />
      </Box>
      <Box className={classes.flex}>
        <p className={classes.text}>{props.playerOneName}</p>
        <p>vs</p>
        <p className={classes.text}>{props.playerTwoName}</p>
      </Box>
      <p className={classes.playerTurn}>{props.playerTurn}'s turn to try:</p>
      {trickSuggestion ? (
        <p className={classes.trickText}>{trickSuggestion}</p>
      ) : (
        <p>kickflip or get a random trick</p>
      )}
    </Paper>
  );
};

export default Display;
