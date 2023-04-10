import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Main from "./components/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("featured-jobs.json"),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);