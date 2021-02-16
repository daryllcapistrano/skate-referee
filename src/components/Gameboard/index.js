import { useState } from "react";
import { Box, Chip, Container, TextField } from "@material-ui/core";
import { trick, stance } from "../../data/tricks";
import { Landed, Bailed } from "../ToastOptions";
import { Announcer } from "../Displays";
import Menu from "../Menu";

import { grey } from "@material-ui/core/colors";

export default function Gameboard() {
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [playerTurn, setPlayerTurn] = useState(playerOneName);
  const [suggestedTrick, setSuggestedTrick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [winner, setWinner] = useState(null);

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
    setPlayerTurn(playerOneName);
  };

  const landedPlayerOne = () => {
    setPlayerTurn(playerTwoName);
    Landed();
    return null;
  };

  const landedPlayerTwo = () => {
    setPlayerTurn(playerOneName);
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
      setPlayerTurn(playerTwoName);
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
      setPlayerTurn(playerOneName);
      Bailed();
    }
  };

  const undoPlayerOne = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
      setDisabled(false);
      setPlayerTurn(playerOneName);
      setWinner(null);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
      setDisabled(false);
      setPlayerTurn(playerTwoName);
      setWinner(null);
    }
  };

  return (
    <Container disableGutters={true}>
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
