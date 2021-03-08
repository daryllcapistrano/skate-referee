import { useState } from "react";
import Menu from "../../components/Menu";
import Display from "../../components/Display";
import { makeStyles } from "@material-ui/styles";
import { trick, stance } from "../../data/tricks";
import { Landed, Bailed } from "../../utils/ToastOptions";
import { Box, IconButton, TextField } from "@material-ui/core";
import { FaRegThumbsUp, FaRegThumbsDown, FaUndoAlt } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    margin: "auto",
  },
});

const Gameboard = () => {
  const [playerOneName, setPlayerOneName] = useState("Player One");
  const [playerTwoName, setPlayerTwoName] = useState("Player Two");
  const [playerTurn, setPlayerTurn] = useState(playerOneName);
  const [suggestedTrick, setSuggestedTrick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [winner, setWinner] = useState(null);

  const getTrickSuggestion = () => {
    let getRandomTrick = Math.floor(Math.random() * trick.length);
    let getRandomStance = Math.floor(Math.random() * stance.length);
    let trickSuggestion = stance[getRandomStance] + " " + trick[getRandomTrick];
    setSuggestedTrick(trickSuggestion);
  };

  const resetGame = () => {
    setPlayerOneName("Player One");
    setPlayerTwoName("Player Two");
    setPlayerTurn(playerOneName);
    setSuggestedTrick(null);
    setDisabled(false);
    setPlayerOne(0);
    setPlayerTwo(0);
    setWinner(null);
  };

  const landedPlayerOne = () => {
    setPlayerTurn(playerTwoName);
    Landed();
  };

  const landedPlayerTwo = () => {
    setPlayerTurn(playerOneName);
    Landed();
  };

  const missedPlayerOne = () => {
    if (playerOne === 4) {
      setWinner(playerTwoName + " won!");
      setPlayerOne(playerOne + 1);
      setDisabled(true);
    } else {
      setPlayerTurn(playerTwoName);
      setPlayerOne(playerOne + 1);
      Bailed();
    }
  };

  const missedPlayerTwo = () => {
    if (playerTwo === 4) {
      setWinner(playerOneName + " won!");
      setPlayerTwo(playerTwo + 1);
      setDisabled(true);
    } else {
      setPlayerTurn(playerOneName);
      setPlayerTwo(playerTwo + 1);
      Bailed();
    }
  };

  const undoPlayerOne = () => {
    if (playerOne === 0) {
      return null;
    } else {
      setPlayerOne(playerOne - 1);
      setPlayerTurn(playerOneName);
      setDisabled(false);
      setWinner(null);
    }
  };

  const undoPlayerTwo = () => {
    if (playerTwo === 0) {
      return null;
    } else {
      setPlayerTwo(playerTwo - 1);
      setPlayerTurn(playerTwoName);
      setDisabled(false);
      setWinner(null);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Menu resetGame={resetGame} getTrickSuggestion={getTrickSuggestion} />
      <Display
        playerTwoName={playerTwoName}
        playerOneName={playerOneName}
        playerOne={playerOne}
        playerTwo={playerTwo}
        winner={winner}
        playerTurn={playerTurn}
        suggestedTrick={suggestedTrick}
      />
      <Box
        id="playerOne"
        margin={2}
        padding={2}
        bgcolor="#f0f0f0"
        borderRadius={4}
      >
        <TextField
          id="player-one"
          placeholder="Enter Player One's Name"
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
        borderRadius={4}
      >
        <TextField
          id="player-two"
          placeholder="Enter Player Two's Name"
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
    </div>
  );
};

export default Gameboard;
