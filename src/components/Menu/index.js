// import { useState } from "react";
// import { trick, stance } from "../data/tricks";
import { Box, Button } from "@material-ui/core";

import { FaRandom, FaStar } from "react-icons/fa";

const Menu = (props) => {
  return (
    <Box
      display="inline-flex"
      justifyContent="space-evenly"
      width="100%"
      my="2em"
    >
      <Button
        color="default"
        onClick={() => props.resetGame()}
        startIcon={<FaStar />}
        size="small"
      >
        New Game
      </Button>
      <Button
        color="default"
        onClick={() => props.getTrickSuggestion()}
        startIcon={<FaRandom />}
        size="small"
      >
        Random Trick
      </Button>
    </Box>
  );
};

export default Menu;
