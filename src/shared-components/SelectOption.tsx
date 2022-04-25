import { Box, Typography } from "@mui/material";
import { ReactComponent as Star } from "src/assets/icons/star.svg";
import { makeStyles } from "@mui/styles";
import { colors } from "src/utils/colors";

interface IProps {
  text: string;
  value: string | boolean;
  isSelected?: boolean;
  selectOption(event: string | boolean): void;
}

const SelectOption = (props: IProps) => {
  const classes = useStyles();
  const { text, value, isSelected } = props;

  const onSelectOption = (selection: string | boolean) => {
    props.selectOption(selection);
  };

  const createMarkup = (text: string) => {
    return { __html: text };
  };

  return (
    <Box
      minHeight={"2.5rem"}
      justifyContent={isSelected ? "space-between" : "center"}
      onClick={() => onSelectOption(value)}
      className={classes.container}
    >
      {isSelected && <Star />}
      <Typography
        textAlign="center"
        variant="text"
        alignSelf="center"
        dangerouslySetInnerHTML={createMarkup(text)}
      ></Typography>

      {/* Empty Box */}
      {isSelected && <Box width={40} height={40}></Box>}
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    display: "flex",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    backgroundColor: colors.PurpleLight,
    borderRadius: "12.5rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});

export default SelectOption;
