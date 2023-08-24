import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

// interface AppProps {
//   router: typeof router;
// }

const App: React.FC = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
