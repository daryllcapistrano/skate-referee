import { Box, Button } from "@material-ui/core";
import { FaRandom, FaStar } from "react-icons/fa";

const Menu = (props) => {
  return (
    <Box
      width="100%"
      paddingTop="2em"
      display="inline-flex"
      justifyContent="space-evenly"
    >
      <Button
        color="secondary"
        variant="contained"
        startIcon={<FaStar />}
        onClick={() => props.resetGame()}
      >
        New Game
      </Button>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<FaRandom />}
        onClick={() => props.getTrickSuggestion()}
      >
        Random Trick
      </Button>
    </Box>
  );
};

export default Menu;
