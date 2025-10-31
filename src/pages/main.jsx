import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../src/App.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about/About.jsx";
import Home from "./home/Home.jsx";
import Shop from "./shop/Shop.jsx";
import Contact from "./contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
