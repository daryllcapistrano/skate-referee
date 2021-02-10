import { useState } from "react";
import { trick, stance } from "../data/tricks";
import { Button } from "@material-ui/core";

import { FaRegQuestionCircle } from "react-icons/fa";

export default function TrickSuggestion() {
  const [suggestedTrick, setSuggestedTrick] = useState(" ");

  function GetTrickSuggestion() {
    let getRandomTrick = Math.floor(Math.random() * trick.length);
    let getRandomStance = Math.floor(Math.random() * stance.length);
    let trickSuggestion = stance[getRandomStance] + " " + trick[getRandomTrick];
    setSuggestedTrick(trickSuggestion);
  }

  return (
    <div>
      <div>{suggestedTrick}</div>
      <Button
        color="default"
        variant="contained"
        onClick={GetTrickSuggestion}
        startIcon={<FaRegQuestionCircle />}
        size="small"
      >
        Random Trick
      </Button>
    </div>
  );
}
