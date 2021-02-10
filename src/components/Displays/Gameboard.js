import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { NotifyLanded, NotifyBailed } from "../ToastNotifications/toastOptions";
import { Scoreboard } from "./index";
import TrickSuggestion from "../../utils/getTrickSuggestion";

import { FaCheck, FaTimesCircle, FaUndo, FaStar } from "react-icons/fa";

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [disabled, setDisabled] = useState(false);

  const styles = useStyles();

  const landedTrick = () => {
    NotifyLanded();
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
      NotifyBailed();
    }
  };
  const missedPlayerTwo = () => {
    if (playerTwo === 4) {
      setPlayerTwo(playerTwo + 1);
      setDisabled(true);
      console.log("PLAYER 2 LOST");
    } else {
      setPlayerTwo(playerTwo + 1);
      NotifyBailed();
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
      <Grid container direction="row">
        <Grid item className={styles.menu} xs={12} sm={6}>
          <TrickSuggestion />
          <Button
            color="default"
            variant="contained"
            onClick={resetGame}
            startIcon={<FaStar />}
            size="small"
          >
            Start New Game
          </Button>
        </Grid>
        <Grid item className={styles.item} xs={12} sm={6}>
          <Scoreboard playerOne={playerOne} />
          <TextField
            id="player-one"
            label="Skater One"
            placeholder="enter name"
            fullWidth={true}
            color="secondary"
            onChange={(event) => setPlayerOneName(event.target.value)}
          />
          <h2>{playerOneName}</h2>
          <Container className={styles.buttonWrapper}>
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
            <IconButton
              color="default"
              variant="contained"
              onClick={undoPlayerOne}
            >
              <FaUndo />
            </IconButton>
          </Container>
          <Scoreboard playerTwo={playerTwo} />
          <TextField
            id="player-two"
            label="Skater Two"
            placeholder={"enter name"}
            fullWidth={true}
            color="secondary"
            onChange={(event) => setPlayerTwoName(event.target.value)}
          />
          <h2>{playerTwoName}</h2>
          <Container className={styles.buttonWrapper}>
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
            <IconButton
              color="default"
              variant="contained"
              onClick={undoPlayerTwo}
            >
              <FaUndo />
            </IconButton>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
