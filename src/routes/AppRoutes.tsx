import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/not-found/NotFound";
import MovieDetail from "../pages/movie-detail/MovieDetail";
import Movies from "../pages/movies/Movies";
import Welcome from "../pages/welcome/Welcome";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route element={<MovieDetail />} path="movies/:id" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
