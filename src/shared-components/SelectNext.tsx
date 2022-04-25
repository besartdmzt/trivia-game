import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "src/utils/colors";
import { ReactComponent as Repeat } from "src/assets/icons/repeat.svg";
import { ReactComponent as Next } from "src/assets/icons/next.svg";

interface IProps {
  text: string;
  icon?: "next" | "again";
  selectNext(): void;
}

const SelectNext = (props: IProps) => {
  const classes = useStyles();
  const { text, icon } = props;

  const onSelectOption = () => {
    props.selectNext();
  };

  return (
    <Box
      justifyContent={icon ? "space-between" : "center"}
      onClick={onSelectOption}
      className={classes.container}
    >
      {/* Empty Box */}
      {icon && <Box width={40} height={40}></Box>}

      <Typography variant="text">{text}</Typography>

      {icon === "again" && <Repeat />}
      {icon === "next" && <Next />}
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    cursor: "pointer",
    backgroundColor: colors.Red,
    borderRadius: "12.5rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    boxShadow: "0px 10px 4px #CB5A85",
  },
});

export default SelectNext;
