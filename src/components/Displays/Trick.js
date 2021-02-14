import { Box } from "@material-ui/core";

export default function Trick(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="4em"
      bgcolor="secondary.main"
    >
      <Box color="text.secondary">{props.suggestedTrick}</Box>
    </Box>
  );
}
