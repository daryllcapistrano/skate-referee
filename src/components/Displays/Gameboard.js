import { useState } from "react";
import { Chip, Container, Divider, TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { Scoreboard } from "./index";
import { trick, stance } from "../../data/tricks";
import TrickSuggestion from "../../utils/getTrickSuggestion";
import { Landed, Bailed } from "../ToastNotifications/toastOptions";
import Announcer from "./Announcer";

// import { FaStar } from "react-icons/fa";

export default function Gameboard() {
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [suggestedTrick, setSuggestedTrick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [winner, setWinner] = useState(null);

  const styles = useStyles();

  const getTrickSuggestion = () => {
    let getRandomTrick = Math.floor(Math.random() * trick.length);
    let getRandomStance = Math.floor(Math.random() * stance.length);
    let trickSuggestion = stance[getRandomStance] + " " + trick[getRandomTrick];
    setSuggestedTrick(trickSuggestion);
  };

  const resetGame = () => {
    setPlayerOne(0);
    setPlayerTwo(0);
    setDisabled(false);
    setWinner(null);
    setSuggestedTrick(null);
  };

  const landedTrick = () => {
    Landed();
    return null;
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
      setWinner(null);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
      setDisabled(false);
      setWinner(null);
    }
  };

  return (
    <Container className={styles.root} disableGutters={true}>
      <Container className={styles.wrapper}>
        <Announcer winner={winner} />
        <Divider />
        <Container style={{ height: `50px`, backgroundColor: `gray` }}>
          {suggestedTrick}
        </Container>
        <TrickSuggestion
          resetGame={resetGame}
          getTrickSuggestion={getTrickSuggestion}
        />
      </Container>
      <Divider />
      <Container id="playerOne" className={styles.wrapper}>
        <TextField
          id="player-one"
          label="Skater One"
          placeholder="enter name"
          variant="outlined"
          color="default"
          margin="dense"
          onChange={(event) => setPlayerOneName(event.target.value)}
        />
        <Scoreboard playerOne={playerOne} />
        <Chip
          variant="outlined"
          size="medium"
          label="LANDED"
          disabled={disabled}
          onClick={landedTrick}
          clickable
        />
        <Chip
          variant="outlined"
          size="medium"
          label="BAILED"
          disabled={disabled}
          onClick={missedPlayerOne}
          clickable
        />
        <Chip
          variant="outlined"
          size="medium"
          label="UNDO"
          onClick={undoPlayerOne}
          clickable
        />
      </Container>
      <Divider />
      <Container id="playerTwo" className={styles.wrapper}>
        <TextField
          id="player-two"
          label="Skater Two"
          placeholder={"enter name"}
          variant="outlined"
          color="default"
          margin="dense"
          onChange={(event) => setPlayerTwoName(event.target.value)}
        />
        <Scoreboard playerTwo={playerTwo} />
        <Chip
          variant="outlined"
          size="medium"
          label="LANDED"
          disabled={disabled}
          onClick={landedTrick}
          clickable
        />
        <Chip
          variant="outlined"
          size="medium"
          label="BAILED"
          disabled={disabled}
          onClick={missedPlayerTwo}
          clickable
        />
        <Chip
          variant="outlined"
          size="medium"
          label="UNDO"
          onClick={undoPlayerTwo}
          clickable
        />
      </Container>
      <Divider />
    </Container>
  );
}
