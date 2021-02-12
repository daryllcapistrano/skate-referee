import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: `flex`,
    flexDirection: `column`,
    // justifyContent: `space-between`,
    height: `calc(100vh - 100px)`,
  },
  wrapper: {
    padding: `2em`,
  },
});
