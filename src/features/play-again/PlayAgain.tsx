import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "src/app/store";
import SelectNext from "src/shared-components/SelectNext";
import { useGlobalStyles } from "src/utils/styles";

const PlayAgain = () => {
  const { t } = useTranslation();
  const globalClasses = useGlobalStyles();
  const navigate = useNavigate();

  const playAgain = () => {
    navigate("/");
  };

  const score = useSelector((state: RootState) => state.game.score);
  return (
    <>
      <Box pt={10}>
        <Box className={globalClasses.circle}>
          <Typography className={globalClasses.circleDetail} variant="score">
            {score}
          </Typography>
        </Box>
      </Box>
      <Box className={globalClasses.bottomButton}>
        <SelectNext icon="again" selectNext={playAgain} text={t("AGAIN")} />
      </Box>
    </>
  );
};

export default PlayAgain;
