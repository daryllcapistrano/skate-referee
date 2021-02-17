import { Box, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/skaters-in-skatepark.svg";

export default function Landing() {
  return (
    <>
      <Box textAlign="center" mt={8}>
        <h1>S.K.A.T.E. REFEREE</h1>
        <p>Keep track of your game and focus on ripping!</p>
        <img
          src={Image}
          alt="skaters skating"
          style={{
            width: `100vw`,
            maxHeight: `66vh`,
            padding: `1.5em`,
          }}
        />
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
    </>
  );
}
