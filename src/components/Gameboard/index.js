import { useState } from "react";
import {
  Box,
  Chip,
  Container,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { trick, stance } from "../../data/tricks";
import { Landed, Bailed } from "../ToastOptions";
import { Announcer } from "../Displays";
import Menu from "../Menu";
import { FaUser } from "react-icons/fa";
import { grey } from "@material-ui/core/colors";

export default function Gameboard() {
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [suggestedTrick, setSuggestedTrick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [winner, setWinner] = useState(null);
  const [playerTurn, setPlayerTurn] = useState("p1");

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
    setPlayerTurn("p1");
  };

  const landedPlayerOne = () => {
    setPlayerTurn("p2");
    Landed();
    return null;
  };

  const landedPlayerTwo = () => {
    setPlayerTurn("p1");
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
      setPlayerTurn("p2");
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
      setPlayerTurn("p1");
      Bailed();
    }
  };

  const undoPlayerOne = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
      setDisabled(false);
      setPlayerTurn("p1");
      setWinner(null);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
      setDisabled(false);
      setPlayerTurn("p2");
      setWinner(null);
    }
  };

  return (
    <Container className={styles.root} disableGutters={true}>
      <Menu resetGame={resetGame} getTrickSuggestion={getTrickSuggestion} />
      <Announcer
        playerOne={playerOne}
        playerOneName={playerOneName}
        playerTwo={playerTwo}
        playerTwoName={playerTwoName}
        winner={winner}
        playerTurn={playerTurn}
        suggestedTrick={suggestedTrick}
      />
      <Box
        id="playerOne"
        margin={2}
        padding={2}
        bgcolor={grey.A400}
        borderRadius={8}
      >
        <TextField
          id="player-one"
          placeholder="Enter Player One's Name"
          variant="filled"
          color="primary"
          margin="normal"
          fullWidth={true}
          onChange={(event) => setPlayerOneName(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUser />
              </InputAdornment>
            ),
          }}
        />
        <Box
          display="inline-flex"
          justifyContent="space-evenly"
          width="100%"
          mt="1.5em"
        >
          <Chip
            variant="outlined"
            size="medium"
            label="LAND"
            disabled={disabled}
            onClick={landedPlayerOne}
            clickable
          />
          <Chip
            variant="outlined"
            size="medium"
            label="BAIL"
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
        </Box>
      </Box>
      <Box
        id="playerTwo"
        margin={2}
        padding={2}
        bgcolor={grey.A400}
        borderRadius={8}
      >
        <TextField
          id="player-two"
          placeholder="Enter Player Two's Name"
          variant="filled"
          color="primary"
          margin="normal"
          fullWidth={true}
          onChange={(event) => setPlayerTwoName(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaUser />
              </InputAdornment>
            ),
          }}
        />
        <Box
          display="inline-flex"
          justifyContent="space-evenly"
          width="100%"
          mt="1.5em"
        >
          <Chip
            variant="outlined"
            size="medium"
            label="LAND"
            disabled={disabled}
            onClick={landedPlayerTwo}
            clickable
          />
          <Chip
            variant="outlined"
            size="medium"
            label="BAIL"
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
        </Box>
      </Box>
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-around`,
    height: `calc(100vh - 100px)`,
  },
});
