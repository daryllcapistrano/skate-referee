// import { useState } from "react";
// import { trick, stance } from "../data/tricks";
import { Button, Container } from "@material-ui/core";

import { FaRegQuestionCircle, FaStar } from "react-icons/fa";

const TrickSuggestion = (props) => {
  // const [suggestedTrick, setSuggestedTrick] = useState(" ");

  // function GetTrickSuggestion() {
  //   let getRandomTrick = Math.floor(Math.random() * trick.length);
  //   let getRandomStance = Math.floor(Math.random() * stance.length);
  //   let trickSuggestion = stance[getRandomStance] + " " + trick[getRandomTrick];
  //   setSuggestedTrick(trickSuggestion);
  // }

  return (
    <Container
      style={{
        display: `inline-flex`,
        justifyContent: `space-evenly`,
        width: `100%`,
        marginTop: `2em`,
      }}
    >
      <span>
        <Button
          color="default"
          onClick={() => props.resetGame()}
          startIcon={<FaStar />}
          size="small"
        >
          New Game
        </Button>
      </span>
      <span>
        <Button
          color="default"
          onClick={() => props.getTrickSuggestion()}
          startIcon={<FaRegQuestionCircle />}
          size="small"
        >
          Random Trick
        </Button>
      </span>
    </Container>
  );
};

export default TrickSuggestion;
