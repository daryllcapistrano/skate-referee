import { Box } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Scoreboard from "./Scoreboard";

export default function Announcer(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={grey[50]}
      height="20em"
      margin={2}
      borderRadius={4}
    >
      <Box display="flex" flexDirection="column" color={grey[900]}>
        <div>{props.winner} is the winner</div>
        <div>{props.playerTurn}'s turn</div>
        <div>{props.suggestedTrick}</div>
      </Box>
      <Box color={grey[900]}>
        <Scoreboard playerOne={props.playerOne} />
        <div>
          {props.playerOneName} versus {props.playerTwoName}
        </div>
        <Scoreboard playerTwo={props.playerTwo} />
      </Box>
    </Box>
  );
}
