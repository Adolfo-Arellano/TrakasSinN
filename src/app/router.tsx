import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.tsx";
import Guides from "../pages/Guides.tsx";
import Clips from "../pages/Clips.tsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/guias", element: <Guides /> },
      { path: "/clips", element: <Clips /> }
    ],
  },
]);
