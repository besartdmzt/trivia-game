import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Dislike } from "src/assets/icons/dislike.svg";
import { useGlobalStyles } from "src/utils/styles";

const WrongAnswer = () => {
  const globalClasses = useGlobalStyles();
  const navigation = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigation("/play-again");
    }, 1000);
  });

  return (
    <Box pt={10}>
      <Box className={globalClasses.circle}>
        <Dislike className={globalClasses.circleDetail} />
      </Box>
    </Box>
  );
};

export default WrongAnswer;
