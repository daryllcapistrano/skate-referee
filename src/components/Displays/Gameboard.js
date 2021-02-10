import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrickSuggestion from "../../utils/getTrickSuggestion";
import { NotifyLanded, NotifyBailed } from "../ToastNotifications/toastOptions";
import { Scoreboard } from "./index";

import { FaCheck, FaTimesCircle, FaUndo, FaStar } from "react-icons/fa";

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

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

  const styles = useStyles();

  return (
    <Container className={styles.root} disableGutters={true}>
      <Grid container className={styles.gridContainer} direction="row">
        <Grid item className={styles.gridItem} xs={12} sm={6}>
          <Container className={styles.container}>
            <Scoreboard playerOne={playerOne} />
            <TextField
              id="player-one"
              label="Skater One"
              placeholder="enter name"
              fullWidth={true}
              color="secondary"
              onChange={(event) => setPlayerOneName(event.target.value)}
            />
            <div>{playerOneName}</div>
            <div className={styles.buttonWrapper}>
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
            </div>
          </Container>
          <Container className={styles.container}>
            <Scoreboard playerTwo={playerTwo} />
            <TextField
              id="player-two"
              label="Skater Two"
              placeholder={"enter name"}
              fullWidth={true}
              color="secondary"
              onChange={(event) => setPlayerTwoName(event.target.value)}
            />
            <div>{playerOneName}</div>
            <Box className={styles.buttonWrapper}>
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
            </Box>
          </Container>
        </Grid>
        <Grid item className={styles.gridItem} xs={12} sm={6}>
          <Container>
            <TrickSuggestion />
            <div style={{ display: `flex`, justifyContent: `space-around` }}>
              <Button
                color="default"
                variant="contained"
                onClick={resetGame}
                startIcon={<FaStar />}
                size="small"
              >
                Start New Game
              </Button>
              {/* <Button
                color="default"
                variant="contained"
                onClick={GetTrickSuggestion}
                startIcon={<FaRegQuestionCircle />}
                size="small"
              >
                Random Trick
              </Button> */}
            </div>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  buttonWrapper: {
    display: `flex`,
    justifyContent: `space-around`,
    marginTop: `2em`,
    width: `60%`,
  },
  gridContainer: {
    height: "100%",
    minHeight: "100vh",
  },
  gridItem: {
    alignSelf: `baseline`,
  },
  container: {
    backgroundColor: `gray`,
    padding: `2em 1em`,
  },
});
