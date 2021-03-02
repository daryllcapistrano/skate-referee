import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import SkatersInSkatepark from "../../assets/skaters-in-skatepark.svg";

const useStyles = makeStyles({
  root: {
    maxWidth: "600px",
    margin: "auto",
    paddingTop: "2em",
  },
  image: {
    width: "100%",
    padding: "1em",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Box textAlign="center" className={classes.root}>
      <img
        className={classes.image}
        src={SkatersInSkatepark}
        alt="skaters skating"
      />
      <p>Keep track of your game and focus on ripping!</p>
      <Box margin="auto" maxWidth="90%" width="400px">
        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="secondary"
          size="small"
          fullWidth={true}
        >
          <p>GO</p>
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
