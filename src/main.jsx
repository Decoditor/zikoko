import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Categories from "./components/Categories.jsx";
import Category from "./category/Category.jsx";
import Post from "./content/Post.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categories/:category",
    element: <Category />,
  },
  {
    path: "/:category/:post",
    element: <Post />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
