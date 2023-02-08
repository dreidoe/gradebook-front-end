import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import ErrorPage from "./routes/error-page";
import LoginRegister from "./routes/login-register";
import { apiService } from "./services";
import Students from "./routes/students";

const loadStudents = async () => {
  const students = await apiService.getStudents();
  return { students };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students",
    element: <Students />,
    errorElement: <ErrorPage />,
    loader: loadStudents,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
