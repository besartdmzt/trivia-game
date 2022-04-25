import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "src/app/store";
import {
  getQuestions,
  incrementScore,
  removeFirstQuestion,
} from "src/features/slices/gameSlice";
import { Loading } from "src/models/Loading";
import SelectOption from "src/shared-components/SelectOption";

const Questions = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { difficulty } = useParams<string>();
  const { questions, loading } = useSelector((state: RootState) => state.game);

  const createMarkup = (text: string) => {
    return { __html: text };
  };

  useEffect(() => {
    if (
      difficulty !== "easy" &&
      difficulty !== "medium" &&
      difficulty !== "hard"
    ) {
      navigate(`/`);
    } else if (questions.length === 0) {
      dispatch(
        getQuestions({
          difficulty,
          amount: 10,
        })
      );
    }
  }, [difficulty, dispatch, navigate, questions.length]);

  const onAnswerSelected = (answer: boolean) => {
    if (answer) {
      dispatch(incrementScore());
      dispatch(removeFirstQuestion());
      navigate(`/correct-answer`);
    } else {
      navigate(`/wrong-answer`);
    }
  };

  return (
    <Box
      my={0.625}
      mx={0.625}
      display="flex"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
      textAlign="center"
    >
      {loading === Loading.LOADING && (
        <Box justifyContent="center" mt={5}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {loading === Loading.SUCCESS && (
        <>
          {questions.length > 0 ? (
            <>
              <Typography
                paddingX={0.625}
                paddingY={2}
                variant="text"
                dangerouslySetInnerHTML={createMarkup(questions[0].question)}
              ></Typography>

              <Grid
                display="flex"
                justifyContent="center"
                textAlign="center"
                flexDirection="column"
                rowSpacing={{ xs: 1, sm: 2, md: 2 }}
                container
              >
                {questions[0].answers.map((data, index) => {
                  return (
                    <Grid key={index} item>
                      <SelectOption
                        key={index}
                        selectOption={(e: boolean) => onAnswerSelected(e)}
                        value={data.isCorrect}
                        text={data.answer}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          ) : (
            <Box>{t("NO_QUESTIONS_ARE_FOUND")}</Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Questions;
