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
    margin: "0 auto",
    height: "300px",
    width: "300px",
  },
});

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const classes = useStyles();

  const landedCounter = () => {
    console.log("congrats u landed it");
    return null;
  };

  const missedPlayerOne = () => {
    if (playerOne === 5) {
      console.log("you lost");
      return null;
    } else {
      setPlayerOne(playerOne + 1);
    }
  };
  const missedPlayerTwo = () => {
    if (playerTwo === 5) {
      console.log("you lost");
      return null;
    } else {
      setPlayerTwo(playerTwo + 1);
    }
  };

  const undoPlayerOne = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
    }
  };

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
            PLAYER 1
            <Scoreboard playerOne={playerOne} />
            <Button onClick={landedCounter} color="primary" variant="outlined">
              landed
            </Button>
            <Button
              onClick={missedPlayerOne}
              color="secondary"
              variant="outlined"
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
            PLAYER 2
            <Scoreboard playerTwo={playerTwo} />
            <Button onClick={landedCounter} color="primary" variant="outlined">
              landed
            </Button>
            <Button
              onClick={missedPlayerTwo}
              color="secondary"
              variant="outlined"
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
