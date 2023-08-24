import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Contact from "../pages/Contact";

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
    ],
  },
];

export const router = createBrowserRouter(routes);
