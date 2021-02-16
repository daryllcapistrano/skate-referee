import { AppBar, Box, Container, Toolbar } from "@material-ui/core";

export default function Header() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar variant="dense">
        <Container>SKATE REFEREE</Container>
        <Box
          display="inline-flex"
          justifyContent="space-around"
          width="100%"
        ></Box>
      </Toolbar>
    </AppBar>
  );
}
