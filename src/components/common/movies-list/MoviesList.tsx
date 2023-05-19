import { Card, CircularProgress, Grid, Typography } from "@mui/material";
import { IMoviesList } from "./types";
import { useQuery } from "react-query";
import MovieCard from "../movie-card/MovieCard";
import { MovieDTO } from "../../../services/types";
import { getData } from "../../../services/get/getData";

function MoviesList() {
  const query = "movie";
  const { data, isLoading, isError, error } = useQuery("lotr_movies", () =>
    getData(query)
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    <Grid
      component={"section"}
      item
      container
      xs={8}
      justifyContent={"center"}
      spacing={1}
    >
      {data?.docs?.map((movie: MovieDTO) => {
        return (
          <Grid
            component={"div"}
            key={movie?._id}
            item
            container
            xs={3}
            // sm={8}
            // md={4}
            justifyContent={"center"}
          >
            <MovieCard movie={movie} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MoviesList;
