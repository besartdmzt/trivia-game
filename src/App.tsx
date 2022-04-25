import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import AlertMessage from "./features/alert-message/AlertMessage";
import ChooseDificulity from "./features/choose-dificulity/ChooseDificulity";
import CorrectAnswer from "./features/correct-answer/CorrectAnswer";
import PlayAgain from "./features/play-again/PlayAgain";
import Questions from "./features/questions/Questions";
import WrongAnswer from "./features/wrong-answer/WrongAnswer";
import { colors } from "src/utils/colors";
import { useGlobalStyles } from "src/utils/styles";
import "./i18n/i18n";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    header: true;
    text: true;
    score: true;
    scoreSmall: true;
  }
}

const App = () => {
  const globalClasses = useGlobalStyles();
  const theme = createTheme({
    spacing: 16,
    components: {
      MuiTypography: {
        variants: [
          {
            props: { variant: "header" },
            style: {
              fontSize: "50px",
              lineHeight: "60.95px",
              fontWeight: 900,
              fontFamily: ["Montserrat", "sans-serif"].join(","),
              color: colors.White,
            },
          },
          {
            props: { variant: "text" },
            style: {
              fontSize: "25px",
              fontWeight: 900,
              lineHeight: "30.48px",
              fontFamily: ["Montserrat", "sans-serif"].join(","),
              color: colors.White,
            },
          },
          {
            props: { variant: "score" },
            style: {
              fontSize: "150px",
              fontWeight: 900,
              fontFamily: ["Montserrat", "sans-serif"].join(","),
              color: colors.White,
              textAlign: "center",
            },
          },
          {
            props: { variant: "scoreSmall" },
            style: {
              fontSize: "75px",
              fontWeight: 900,
              fontFamily: ["Montserrat", "sans-serif"].join(","),
              color: colors.White,
              textAlign: "center",
            },
          },
        ],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Box className={globalClasses.mainContainer}>
          <AlertMessage />
          <Routes>
            <Route path="/" element={<ChooseDificulity />} />
            <Route path="questions/:difficulty" element={<Questions />} />
            <Route path="correct-answer" element={<CorrectAnswer />} />
            <Route path="wrong-answer" element={<WrongAnswer />} />
            <Route path="play-again" element={<PlayAgain />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
