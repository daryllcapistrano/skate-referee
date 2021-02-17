import { Box } from "@material-ui/core";
import Scoreboard from "./Scoreboard";

export default function Announcer(props) {
  const trickSuggestion = props.suggestedTrick;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      marginBottom={4}
      paddingY={4}
      textAlign="center"
    >
      <Box display="inline-flex" justifyContent="space-around">
        <Scoreboard playerOne={props.playerOne} />
        <Scoreboard playerTwo={props.playerTwo} />
      </Box>
      <Box display="inline-flex" justifyContent="space-around">
        <h4>{props.playerOneName}</h4>
        <h4>{props.playerTwoName}</h4>
      </Box>
      <h3>{props.playerTurn}'s turn</h3>
      <Box>{props.winner}</Box>
      {trickSuggestion ? (
        <Box>{trickSuggestion}</Box>
      ) : (
        <Box>Try a kickflip to start the game</Box>
      )}
    </Box>
  );
}
