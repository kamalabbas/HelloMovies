import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
// import { SeriesPage } from "../pages/SeriesPage";
import { MainLayout } from "../layout/MainLayout";
// import { SearchPage } from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        { index: true, element: <HomePage /> },
        { path: 'movies', element: <Movies /> },
        { path: 'series', element:  <Movies /> },
        { path: 'search', element: <Movies /> },
        { path: 'movie/:id', element: <MovieDetails />},
    ],
  },
]);

export default router;
