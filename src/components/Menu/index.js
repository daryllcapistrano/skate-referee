// import { useState } from "react";
// import { trick, stance } from "../data/tricks";
import { Box, Button } from "@material-ui/core";
import { FaRandom, FaStar } from "react-icons/fa";

const Menu = (props) => {
  return (
    <Box
      display="inline-flex"
      justifyContent="space-around"
      width="100%"
      paddingTop="2em"
    >
      <Button
        color="secondary"
        variant="contained"
        onClick={() => props.resetGame()}
        startIcon={<FaStar />}
        disableElevation
      >
        New Game
      </Button>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => props.getTrickSuggestion()}
        startIcon={<FaRandom />}
        disableElevation
      >
        Random Trick
      </Button>
    </Box>
  );
};

export default Menu;
