import { Button, useTheme } from "@mui/material";
import { MoviesContainer } from "./MoviesStyled";
import MoviesList from "../../components/common/movies-list/MoviesList";
import dayRivendel from "../../assets/images/dayRivendel.png";
import smeagol from "../../assets/images/smeagol.jpg";
import ActionArea from "../../components/common/action-area/ActionArea";
import Header from "../../components/common/header/Header";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/layout/animations/AnimatedPage";

function Movies() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AnimatedPage>
      <MoviesContainer
        bgimage={dayRivendel}
        bgimageonhover={smeagol}
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"space-between"}
      >
        <Header />
        <Button
          className="more-button"
          onClick={() => navigate("/characters")}
          variant="contained"
        >
          Show more
        </Button>
        <ActionArea linearGradientColor={theme.extraColors.black}>
          <MoviesList />
        </ActionArea>
      </MoviesContainer>
    </AnimatedPage>
  );
}

export default Movies;
