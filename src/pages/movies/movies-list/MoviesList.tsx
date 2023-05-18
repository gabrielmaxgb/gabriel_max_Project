import { Card } from "@mui/material";
import { IMoviesList } from "./types";

function MoviesList({ movies }: IMoviesList) {
  return (
    <>
      {movies?.map((movie: unknown) => {
        return <Card>movie data</Card>;
      })}
    </>
  );
}

export default MoviesList;
