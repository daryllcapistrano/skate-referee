import { Box } from "@material-ui/core";
import React from "react";
import Image from "../../assets/skaters-in-skatepark.svg";

export default function Landing() {
  return (
    <>
      <Box>
        <img src={Image} alt="skaters skating" style={{ width: `100vw` }} />
        <div>
          <a href="https://www.freepik.com/vectors/woman">
            Woman vector created by pch.vector - www.freepik.com
          </a>
        </div>
      </Box>
    </>
  );
}
