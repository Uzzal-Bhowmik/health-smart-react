import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import DynamicService from "../components/DynamicService/DynamicService";

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
        path: "services/:id",
        loader: async ({ params }) =>
          fetch(
            `https://64e8cbb899cf45b15fe02718.mockapi.io/services/${params.id}`
          ),
        element: <DynamicService />,
      },
    ],
  },
]);

export default router;
