import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
