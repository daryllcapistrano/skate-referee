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
      paddingBottom="1em"
    >
      <Button
        variant="filled"
        color="default"
        onClick={() => props.resetGame()}
        startIcon={<FaStar />}
      >
        New Game
      </Button>
      <Button
        variant="filled"
        color="default"
        onClick={() => props.getTrickSuggestion()}
        startIcon={<FaRandom />}
      >
        Random Trick
      </Button>
    </Box>
  );
};

export default Menu;
