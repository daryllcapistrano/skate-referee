import { Paper } from "@material-ui/core";

export default function ScoreBoard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>_ _ _ _ _</p>
      </Paper>
    );
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>S _ _ _ _</p>
      </Paper>
    );
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>S K _ _ _</p>
      </Paper>
    );
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>S K A _ _ </p>
      </Paper>
    );
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>S K A T _ </p>
      </Paper>
    );
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>S K A T E</p>
      </Paper>
    );
  } else {
    return (
      <Paper style={{ width: `100%`, textAlign: `center` }}>
        <p style={{ fontSize: `2em` }}>u lost</p>
      </Paper>
    );
  }
}
