import { Container } from "@material-ui/core";

export default function Announcer(props) {
  return (
    <Container style={{ height: `50px`, backgroundColor: `gray` }}>
      {props.winner}
    </Container>
  );
}
