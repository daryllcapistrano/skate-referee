import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Scoreboard } from "./index";
import TrickSuggestion from "../../utils/getTrickSuggestion";
import { Landed, Bailed } from "../ToastNotifications/toastOptions";

import { FaCheck, FaTimesCircle, FaUndo, FaStar } from "react-icons/fa";

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [disabled, setDisabled] = useState(false);
  const [winner, setWinner] = useState(null);

  const styles = useStyles();

  const landedTrick = () => {
    Landed();
    return null;
  };

  const resetGame = () => {
    setPlayerOne(0);
    setPlayerTwo(0);
    setDisabled(false);
    setWinner(null);
  };

  const missedPlayerOne = () => {
    if (playerOne === 4) {
      setPlayerOne(playerOne + 1);
      setDisabled(true);
      setWinner(playerTwoName + " won!");
    } else {
      setPlayerOne(playerOne + 1);
      Bailed();
    }
  };
  const missedPlayerTwo = () => {
    if (playerTwo === 4) {
      setPlayerTwo(playerTwo + 1);
      setDisabled(true);
      setWinner(playerOneName + " won!");
    } else {
      setPlayerTwo(playerTwo + 1);
      Bailed();
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

  return (
    <Container className={styles.root} disableGutters={true}>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-around`,
          minHeight: `200px`,
          padding: `1em`,
        }}
      >
        <Button
          color="default"
          onClick={resetGame}
          startIcon={<FaStar />}
          size="small"
        >
          New Game
        </Button>
        <TrickSuggestion />
      </div>
      <div style={{ minHeight: `100px` }}> {winner}</div>
      <Container id="playerOne">
        <Grid container>
          <Grid item xs={6}>
            <TextField
              id="player-one"
              label="Skater One"
              placeholder="enter name"
              color="secondary"
              onChange={(event) => setPlayerOneName(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Scoreboard playerOne={playerOne} />
          </Grid>
        </Grid>
        <IconButton
          color="primary"
          variant="contained"
          disabled={disabled}
          onClick={landedTrick}
        >
          <FaCheck />
        </IconButton>
        <IconButton
          color="secondary"
          variant="contained"
          disabled={disabled}
          onClick={missedPlayerOne}
        >
          <FaTimesCircle />
        </IconButton>
        <IconButton color="default" variant="contained" onClick={undoPlayerOne}>
          <FaUndo />
        </IconButton>
      </Container>
      <Container id="playerTwo">
        <Grid container>
          <Grid item xs={6}>
            <TextField
              id="player-two"
              label="Skater Two"
              placeholder={"enter name"}
              color="secondary"
              onChange={(event) => setPlayerTwoName(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Scoreboard playerTwo={playerTwo} />
          </Grid>
        </Grid>
        <IconButton
          color="primary"
          variant="contained"
          disabled={disabled}
          onClick={landedTrick}
        >
          <FaCheck />
        </IconButton>
        <IconButton
          color="secondary"
          variant="contained"
          disabled={disabled}
          onClick={missedPlayerTwo}
        >
          <FaTimesCircle />
        </IconButton>
        <IconButton color="default" variant="contained" onClick={undoPlayerTwo}>
          <FaUndo />
        </IconButton>
      </Container>
    </Container>
  );
}
