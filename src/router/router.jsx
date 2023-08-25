import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
    ],
  },
]);

export default router;
