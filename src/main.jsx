import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import BLogs from "./components/BLogs.jsx";
import Context from "./providers/Context.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import Home from "./components/Home.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import PrivateRoutes from "./priveteroutes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <BLogs></BLogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoutes>
            <RecipeDetails></RecipeDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-tariqul-6nin3.vercel.app/recipe/${params.id}`
          ),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>
);
