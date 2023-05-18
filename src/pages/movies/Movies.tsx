import { useQuery } from "react-query";
import { getMovies } from "../../services/get-movies/getMovies";
import { Button, CircularProgress, Typography } from "@mui/material";
import MoviesList from "./movies-list/MoviesList";

function Movies() {
  const { data, isLoading, isError } = useQuery("lotr_movies", getMovies);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h2">hello lotr fan</Typography>
      <h2>hello lotr fan</h2>
      <MoviesList movies={data?.docs} />
    </>
  );
}

export default Movies;
