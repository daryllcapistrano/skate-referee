export default function Scoreboard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return <h2>_ _ _ _ _</h2>;
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return <h2>S _ _ _ _</h2>;
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return <h2>S K _ _ _</h2>;
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return <h2>S K A _ _ </h2>;
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return <h2>S K A T _ </h2>;
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return <h2>S K A T E</h2>;
  }
}
