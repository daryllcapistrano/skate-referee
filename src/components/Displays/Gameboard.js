// import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "100%",
    minHeight: "calc(100vh - 80px)",
  },
});

export default function Gameboard() {
  // const [playerOne, setPlayerOne] = useState(0);
  // const [playerTwo, setPlayerTwo] = useState(0);

  const classes = useStyles();
  // const isEnabled = playerOne === 5 || playerTwo === 5;

  // const resetGame = () => {
  //   setPlayerOne(0);
  //   setPlayerTwo(0);
  // };

  // const missedLeft = () => {
  //   setPlayerOne(playerOne + 1);
  // };
  // const missedRight = () => {
  //   setPlayerTwo(playerTwo + 1);
  // };

  // const removeLetterLeft = () => {
  //   if (playerOne === 0) {
  //     return null;
  //   } else {
  //     setPlayerOne(playerOne - 1);
  //   }
  // };

  // const removeLetterRight = () => {
  //   if (playerTwo === 0) {
  //     return null;
  //   } else {
  //     setPlayerTwo(playerTwo - 1);
  //   }
  // };

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          player 1
        </Grid>
        <Grid item xs={12} sm={6}>
          player 2
        </Grid>
      </Grid>
    </Container>
  );
}
