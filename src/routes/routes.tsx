import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layouts/Layout";

interface RouterConfig {
  path: string;
  element: React.ReactNode;
  children?: RouterConfig[];
}

const routes: RouterConfig[] = [
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
];

export const router = createBrowserRouter(routes);
