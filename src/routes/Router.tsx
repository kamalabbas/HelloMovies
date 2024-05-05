import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ItemDetails } from "../pages/ItemDetails";
import { MainLayout } from "../layout/MainLayout";
import { NotFound } from "../pages/NotFound";
import MoviePage from "../pages/MoviePage";
import SeriesPages from "../pages/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <MoviePage /> },
      { path: "tv-series", element: <SeriesPages /> },
      { path: "movie/:id", element: <ItemDetails /> },
      { path: "series/:id", element: <ItemDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
