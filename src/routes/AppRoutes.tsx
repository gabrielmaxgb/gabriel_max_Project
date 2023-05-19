import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/not-found/NotFound";
import Movies from "../pages/movies/Movies";
import Welcome from "../pages/welcome/Welcome";
import CharactersAndQuotes from "../pages/characters-and-quotes/CharactersAndQuotes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Movies />} path="/movies" />
        <Route
          element={<CharactersAndQuotes />}
          path="/characters-and-quotes"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
