import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Contact from "../pages/Contact";
import CartsAndMaps from "../pages/CartsAndMaps";

interface RouterConfig {
  path: string;
  element: React.ReactNode;
  children?: RouterConfig[];
}

const routes: RouterConfig[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/chartsandmaps",
        element: <CartsAndMaps />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
