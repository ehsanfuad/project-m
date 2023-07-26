import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PageLayout from "./pages/Dashboard/PageLayout";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import Projects from "./pages/Projects/Proj";
import Project from "./pages/Project/Project";

const DashboardLayout = () => {
  return (
    <>
      <PageLayout />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "files",
        element: <Home />,
      },
    ],
  },
  { path: "project/:id?", element: <Project /> },
]);
function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
