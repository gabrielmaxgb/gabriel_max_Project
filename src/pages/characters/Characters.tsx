import { Grid, Typography } from "@mui/material";
import { CharactersContainer } from "./CharactersStyled";
import AnimatedPage from "../../components/layout/animations/AnimatedPage";
import CharactersList from "../../components/common/characters-list/CharactersList";

function Characters() {
  return (
    <AnimatedPage>
      <CharactersContainer item container xs={12}>
        <Grid
          item
          container
          xs={12}
          flexDirection={"column"}
          justifyContent="start"
          alignItems="center"
        >
          <Typography pb={"1rem"} variant="h1">
            Characters
          </Typography>
          <CharactersList />
        </Grid>
      </CharactersContainer>
    </AnimatedPage>
  );
}

export default Characters;
