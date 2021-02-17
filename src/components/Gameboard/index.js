import { useState } from "react";
import { Box, IconButton, TextField } from "@material-ui/core";
import { trick, stance } from "../../data/tricks";
import { Landed, Bailed } from "../ToastOptions";
import { Announcer } from "../Displays";
import Menu from "../Menu";
import { FaRegThumbsUp, FaRegThumbsDown, FaUndoAlt } from "react-icons/fa";

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
    <>
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
        bgcolor="#f0f0f0"
        borderRadius={10}
      >
        <TextField
          id="player-one"
          placeholder="Enter Player One's Name"
          // variant="filled"
          margin="none"
          fullWidth={true}
          onChange={(event) => setPlayerOneName(event.target.value)}
        />
        <Box
          display="inline-flex"
          justifyContent="space-evenly"
          width="100%"
          mt="1.5em"
        >
          <IconButton
            variant="outlined"
            label="LAND"
            disabled={disabled}
            onClick={landedPlayerOne}
          >
            <FaRegThumbsUp />
          </IconButton>
          <IconButton
            variant="outlined"
            size="medium"
            label="UNDO"
            onClick={undoPlayerOne}
          >
            <FaUndoAlt />
          </IconButton>
          <IconButton
            variant="outlined"
            size="medium"
            label="BAIL"
            disabled={disabled}
            onClick={missedPlayerOne}
          >
            <FaRegThumbsDown />
          </IconButton>
        </Box>
      </Box>
      <Box
        id="playerTwo"
        margin={2}
        padding={2}
        bgcolor="#f0f0f0"
        borderRadius={10}
      >
        <TextField
          id="player-two"
          placeholder="Enter Player Two's Name"
          // variant="filled"
          margin="none"
          fullWidth={true}
          onChange={(event) => setPlayerTwoName(event.target.value)}
        />
        <Box
          display="inline-flex"
          justifyContent="space-evenly"
          width="100%"
          mt="1.5em"
        >
          <IconButton
            variant="outlined"
            label="LAND"
            disabled={disabled}
            onClick={landedPlayerTwo}
          >
            <FaRegThumbsUp />
          </IconButton>
          <IconButton
            variant="outlined"
            size="medium"
            label="UNDO"
            onClick={undoPlayerTwo}
          >
            <FaUndoAlt />
          </IconButton>
          <IconButton
            variant="outlined"
            size="medium"
            label="BAIL"
            disabled={disabled}
            onClick={missedPlayerTwo}
          >
            <FaRegThumbsDown />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
