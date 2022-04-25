import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Like } from "src/assets/icons/like.svg";
import SelectNext from "src/shared-components/SelectNext";
import { useGlobalStyles } from "src/utils/styles";

const CorrectAnswer = () => {
  const globalClasses = useGlobalStyles();
  const navigate = useNavigate();

  const showTheNextQuestion = () => {
    navigate(-1);
  };
  const { t } = useTranslation();

  return (
    <>
      <Box pt={10}>
        <Box className={globalClasses.circle}>
          <Like className={globalClasses.circleDetail} />
        </Box>
      </Box>
      <Box className={globalClasses.bottomButton}>
        <SelectNext
          icon="next"
          selectNext={showTheNextQuestion}
          text={t("NEXT")}
        />
      </Box>
    </>
  );
};

export default CorrectAnswer;
