import { Box } from "@material-ui/core";
import Scoreboard from "./Scoreboard";

export default function Announcer(props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="20em"
      margin={2}
      borderRadius={4}
      textAlign="center"
    >
      <h3>{props.playerTurn}'s turn</h3>
      <Box display="inline-flex" justifyContent="space-around">
        <Scoreboard playerOne={props.playerOne} />
        <Scoreboard playerTwo={props.playerTwo} />
      </Box>
      <Box display="inline-flex" justifyContent="space-around">
        <h4>{props.playerOneName}</h4>
        <h4>{props.playerTwoName}</h4>
      </Box>
      <Box>{props.winner}</Box>
      <Box>{props.suggestedTrick}</Box>
    </Box>
  );
}
