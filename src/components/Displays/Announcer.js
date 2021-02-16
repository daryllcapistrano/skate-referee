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
    >
      <div>{props.winner}</div>
      <div>{props.playerTurn}'s turn</div>
      <div>{props.suggestedTrick}</div>
      {props.playerOneName} versus {props.playerTwoName}
      <Scoreboard playerOne={props.playerOne} />
      <Scoreboard playerTwo={props.playerTwo} />
    </Box>
  );
}
