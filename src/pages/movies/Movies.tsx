import { Button, useTheme } from "@mui/material";
import { MoviesContainer } from "./MoviesStyled";
import MoviesList from "../../components/common/movies-list/MoviesList";
import dayRivendel from "../../assets/images/dayRivendel.png";
import smeagol from "../../assets/images/smeagol.jpg";
import ActionArea from "../../components/common/action-area/ActionArea";
import Header from "../../components/common/header/Header";
import { useNavigate } from "react-router-dom";

function Movies() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
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
          onClick={() => navigate("/characters-and-quotes")}
          variant="contained"
        >
          I NEED more information
        </Button>
        <ActionArea linearGradientColor={theme.extraColors.black}>
          <MoviesList />
        </ActionArea>
      </MoviesContainer>
    </>
  );
}

export default Movies;
