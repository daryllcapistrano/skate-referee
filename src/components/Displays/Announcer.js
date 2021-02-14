import { Box } from "@material-ui/core";

export default function Announcer(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10em"
      bgcolor="info.main"
    >
      <Box color="text.primary">{props.winner}</Box>
    </Box>
  );
}
