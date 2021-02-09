import { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Scoreboard } from "./index";
import { trick, stance } from "../../data/tricks";

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [playerTurn, setPlayerTurn] = useState("playerOne");
  const [suggestedTrick, setSuggestedTrick] = useState(" ");

  function GetTrickSuggestion() {
    let getRandomTrick = Math.floor(Math.random() * trick.length);
    let getRandomStance = Math.floor(Math.random() * stance.length);
    let trickSuggestion = stance[getRandomStance] + " " + trick[getRandomTrick];
    setSuggestedTrick(trickSuggestion);
  }

  const landedTrick = () => {
    console.log("congrats u landed it");
    return null;
  };

  const resetGame = () => {
    setPlayerOne(0);
    setPlayerTwo(0);
    setDisabled(false);
  };

  const missedPlayerOne = () => {
    if (playerOne === 4) {
      setPlayerOne(playerOne + 1);
      setDisabled(true);
      console.log("PLAYER 1 LOST");
    } else {
      setPlayerOne(playerOne + 1);
      setPlayerTurn("playerTwo");
      console.log(playerTurn);
    }
  };
  const missedPlayerTwo = () => {
    if (playerTwo === 4) {
      setPlayerTwo(playerTwo + 1);
      setDisabled(true);
      console.log("PLAYER 2 LOST");
    } else {
      setPlayerTwo(playerTwo + 1);
      setPlayerTurn("playerOne");
    }
  };

  const undoPlayerOne = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
      setDisabled(false);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
      setDisabled(false);
    }
  };

  const classes = useStyles();

  return (
    <Container className={classes.root} disableGutters={true}>
      <Grid
        container
        className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <div>PLAYER 1</div>
          <Scoreboard playerOne={playerOne} />
          <Button
            color="primary"
            variant="contained"
            disabled={disabled}
            onClick={landedTrick}
          >
            landed
          </Button>
          <Button
            color="secondary"
            variant="contained"
            disabled={disabled}
            onClick={missedPlayerOne}
          >
            missed
          </Button>
          <Button color="default" variant="contained" onClick={undoPlayerOne}>
            undo
          </Button>
          <div>PLAYER 2</div>
          <Scoreboard playerTwo={playerTwo} />
          <Button
            color="primary"
            variant="contained"
            disabled={disabled}
            onClick={landedTrick}
          >
            landed
          </Button>
          <Button
            color="secondary"
            variant="contained"
            disabled={disabled}
            onClick={missedPlayerTwo}
          >
            missed
          </Button>
          <Button color="default" variant="contained" onClick={undoPlayerTwo}>
            undo
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: `center` }}>
            <Button
              color="default"
              variant="contained"
              onClick={resetGame}
              // disabled={!disabled}
            >
              Start New Game
            </Button>
            <Button
              color="default"
              variant="contained"
              onClick={GetTrickSuggestion}
            >
              get new trick
            </Button>
          </div>
          <div>{suggestedTrick}</div>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to top, #2C5364, #203A43, #0F2027)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

    maxWidth: "100%",
  },
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
    margin: "0 auto",
    padding: "1em",
  },
});
