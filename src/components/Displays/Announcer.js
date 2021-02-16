import { Box } from "@material-ui/core";
import Scoreboard from "./Scoreboard";

export default function Announcer(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="2em"
      height="10em"
      bgcolor="#f0f0f0"
    >
      <Box color="text.primary">{props.winner}</Box>
      <Box>
        <Scoreboard playerOne={props.playerOne} />
        <div>versus</div>
        <Scoreboard playerTwo={props.playerTwo} />
      </Box>
    </Box>
  );
}
