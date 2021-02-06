export default function ScoreBoard(props) {
  if (props.playerOne === 0 || props.playerTwo === 0) {
    return (
      <div>
        <p>_ _ _ _ _</p>
      </div>
    );
  }
  if (props.playerOne === 1 || props.playerTwo === 1) {
    return (
      <div>
        <p>S _ _ _ _</p>
      </div>
    );
  }
  if (props.playerOne === 2 || props.playerTwo === 2) {
    return (
      <div>
        <p>S K _ _ _</p>
      </div>
    );
  }
  if (props.playerOne === 3 || props.playerTwo === 3) {
    return (
      <div>
        <p>S K A _ _ </p>
      </div>
    );
  }
  if (props.playerOne === 4 || props.playerTwo === 4) {
    return (
      <div>
        <p>S K A T _ </p>
      </div>
    );
  }
  if (props.playerOne === 5 || props.playerTwo === 5) {
    return (
      <div>
        <p>S K A T E</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>u lost</p>
      </div>
    );
  }
}
