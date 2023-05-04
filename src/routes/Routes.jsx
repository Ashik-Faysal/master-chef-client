import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Terms from "../pages/Login/Terms/Terms";
import Categories from "../pages/shared/Categories";
import Blog from "../pages/shared/Blog";
import ShowDetails from "../pages/shared/ShowDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Foods from "../pages/Home/Foods";
import Recipies from "../pages/Home/Recipies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:id",
        element: <ShowDetails />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/foods",
        element: <Foods />,
      },
      {
        path: "/recipes",
        element: <Recipies />,
      },
    ],
  },
]);

export default router;
