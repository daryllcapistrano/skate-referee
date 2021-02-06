import { useState } from "react";
import { Button, Card, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Scoreboard } from "./index";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    maxWidth: "100%",
  },
  container: {
    height: "100%",
    minHeight: "calc(100vh - 80px)",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
    margin: "0 auto",
    padding: "1em",
    // fixed height for consistent 300px width and height
    height: "268px",
    width: "268px",
  },
});

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const landedCounter = () => {
    console.log("congrats u landed it");
    return null;
  };

  const missedPlayerOne = () => {
    if (playerOne === 4) {
      setPlayerOne(playerOne + 1);
      setDisabled(true);
      console.log("PLAYER 1 LOST");
    } else {
      setPlayerOne(playerOne + 1);
    }
  };
  const missedPlayerTwo = () => {
    if (playerTwo === 4) {
      setPlayerTwo(playerTwo + 1);
      setDisabled(true);
      console.log("PLAYER 2 LOST");
    } else {
      setPlayerTwo(playerTwo + 1);
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
          <Card className={classes.card}>
            <div>PLAYER 1</div>
            <Scoreboard playerOne={playerOne} />
            <Button
              onClick={landedCounter}
              color="primary"
              variant="outlined"
              disabled={disabled}
            >
              landed
            </Button>
            <Button
              onClick={missedPlayerOne}
              color="secondary"
              variant="outlined"
              disabled={disabled}
            >
              missed
            </Button>
            <Button onClick={undoPlayerOne} color="primary" variant="outlined">
              undo
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <div>PLAYER 2</div>
            <Scoreboard playerTwo={playerTwo} />
            <Button
              onClick={landedCounter}
              color="primary"
              variant="outlined"
              disabled={disabled}
            >
              landed
            </Button>
            <Button
              onClick={missedPlayerTwo}
              color="secondary"
              variant="outlined"
              disabled={disabled}
            >
              missed
            </Button>
            <Button onClick={undoPlayerTwo} color="primary" variant="outlined">
              undo
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
