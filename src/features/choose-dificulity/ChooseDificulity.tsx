import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { clearScoreAndQuestions } from "src/features/slices/gameSlice";
import { useDispatch } from "react-redux";
import SelectOption from "src/shared-components/SelectOption";
import SelectNext from "src/shared-components/SelectNext";

const ChooseDificulity = () => {
  const { t } = useTranslation();
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">(
    "easy"
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const playNow = () => {
    navigate(`/questions/${difficulty}`, {
      state: {
        difficulty,
      },
    });
  };

  const onDifficulitySelected = (difficulty: "easy" | "medium" | "hard") => {
    setDifficulty(difficulty);
  };

  useEffect(() => {
    dispatch(clearScoreAndQuestions());
  });

  return (
    <Box my={0.625}>
      <Grid
        container
        display="flex"
        justifyContent="center"
        textAlign="center"
        flexDirection="column"
        rowSpacing={{ xs: 1, sm: 1, md: 2 }}
      >
        <Grid item>
          <Typography variant="header">{t("TITLE")}</Typography>
        </Grid>

        <Grid item>
          <Typography variant="text">{t("PICK_YOUR_LEVEL")}</Typography>
        </Grid>
      </Grid>

      <Box mt={1.25}>
        <Grid
          display="flex"
          justifyContent="center"
          textAlign="center"
          flexDirection="column"
          container
          rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Grid item>
            <SelectOption
              selectOption={(e: "easy" | "medium" | "hard") =>
                onDifficulitySelected(e)
              }
              isSelected={difficulty === "easy"}
              value="easy"
              text={t("GO_EASY")}
            />
          </Grid>

          <Grid item>
            <SelectOption
              selectOption={(e: "easy" | "medium" | "hard") =>
                onDifficulitySelected(e)
              }
              isSelected={difficulty === "medium"}
              value="medium"
              text={t("BRING_IT_ON")}
            />
          </Grid>

          <Grid item>
            <SelectOption
              selectOption={(e: "easy" | "medium" | "hard") =>
                onDifficulitySelected(e)
              }
              isSelected={difficulty === "hard"}
              value="hard"
              text={t("INSANITY_MODE")}
            />
          </Grid>

          <Grid item>
            <SelectNext selectNext={playNow} text={t("PLAY_NOW")} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChooseDificulity;
