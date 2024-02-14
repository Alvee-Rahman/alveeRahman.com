import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "about",
    element: <Aboutpage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "project",
    element: <ProjectPage />,
  },

  {
    path: "admin",
    element: <AdminPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
