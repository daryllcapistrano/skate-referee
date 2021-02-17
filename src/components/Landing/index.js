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
          style={{ width: `100vw`, maxHeight: `66vh`, padding: `1.5em` }}
        />
        <Box marginX={2} marginTop={6}>
          <Button
            component={Link}
            to="/home"
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
          >
            GO
          </Button>
        </Box>

        {/* <Box position="absolute" bottom="0" justifyContent="center">
          <a href="https://www.freepik.com/vectors/woman">
            Woman vector created by pch.vector - www.freepik.com
          </a>
        </Box> */}
      </Box>
    </>
  );
}
