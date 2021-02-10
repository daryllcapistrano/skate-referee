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
import { Scoreboard } from "./index";
import { trick, stance } from "../../data/tricks";

import {
  FaCheck,
  FaTimesCircle,
  FaUndo,
  FaStar,
  FaRegQuestionCircle,
} from "react-icons/fa";

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

  const styles = useStyles();

  return (
    <Container className={styles.root} disableGutters={true}>
      <Grid
        container
        className={styles.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Container>
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
              <Button
                color="default"
                variant="contained"
                onClick={GetTrickSuggestion}
                startIcon={<FaRegQuestionCircle />}
                size="small"
              >
                Random Trick
              </Button>
            </div>
            <div
              style={{ height: `50px`, textAlign: `center`, marginTop: `1em` }}
            >
              {suggestedTrick}
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container className={styles.container}>
            <TextField
              id="player-one"
              label="Skater One"
              placeholder="enter name"
              fullWidth={true}
            />
            <Scoreboard playerOne={playerOne} />
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
            <TextField
              id="player-two"
              label="Skate Two"
              placeholder="enter name"
              fullWidth={true}
            />

            <Scoreboard playerTwo={playerTwo} />
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
    margin: `0 auto`,
    width: `60%`,
  },
  gridContainer: {
    height: "100%",
    minHeight: "100vh",
  },
  container: {
    marginTop: `4em`,
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
