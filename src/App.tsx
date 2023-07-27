import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SurveyPage from "./pages/SurveyPage";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SurveyPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
