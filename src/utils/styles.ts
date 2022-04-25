import { makeStyles } from "@mui/styles";
import { colors } from "src/utils/colors";

const useGlobalStyles = makeStyles({
  circle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.PurpleLight,
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
    borderRadius: "100%",
    maxWidth: "15.625rem",
    maxHeight: "15.625rem",
  },
  circleDetail: {
    padding: "4rem",
  },
  mainContainer: {
    height: "100VH",
    position: "relative",
  },
  bottomButton: {
    position: "absolute",
    bottom: "2.5rem",
    width: "100%",
  },
});

export { useGlobalStyles };
