import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import SkatersInSkatepark from "../../assets/skaters-in-skatepark.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    margin: "auto",
    padding: ".5em 1em",
  },
  image: {
    width: "100%",
    borderRadius: "5px",
    marginBottom: "1em",
  },
  text: {
    fontWeight: "bold",
    fontSize: "150%",
    margin: "0",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Box textAlign="center" className={classes.root}>
      <h1>Keep track of your game and focus on ripping!</h1>
      <img
        className={classes.image}
        src={SkatersInSkatepark}
        alt="skaters skating"
      />
      <Button
        component={Link}
        to="/home"
        variant="contained"
        color="secondary"
        size="small"
        fullWidth={true}
      >
        <p className={classes.text}>GO</p>
      </Button>
    </Box>
  );
};

export default Landing;
