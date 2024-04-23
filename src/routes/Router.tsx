import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DataGrid } from "../pages/DataGrid";
import { ItemDetails } from "../pages/ItemDetails";
import { MainLayout } from "../layout/MainLayout";
import { NotFound } from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movies", element: <DataGrid /> },
      { path: "tv-series", element: <DataGrid /> },
      { path: "movie/:id", element: <ItemDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
