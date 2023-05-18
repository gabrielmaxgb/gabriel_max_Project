import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/not-found/NotFound";
import MovieDetail from "../pages/movie-detail/MovieDetail";
const Movies = lazy(() => import("../pages/movies/Movies"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route element={<Movies />} path="/movies" />
          <Route element={<MovieDetail />} path="movies/:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
