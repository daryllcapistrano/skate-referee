export default function Scoreboard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return <p>_ _ _ _ _</p>;
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return <p>S _ _ _ _</p>;
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return <p>S K _ _ _</p>;
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return <p>S K A _ _ </p>;
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return <p>S K A T _ </p>;
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return <p>S K A T E</p>;
  }
}
