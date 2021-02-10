import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  buttonWrapper: {
    display: `flex`,
    justifyContent: `space-around`,
    width: `60%`,
  },
  menu: {
    textAlign: `center`,
  },
  item: {
    alignSelf: `baseline`,
  },
});
