import { createHashRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/FakeAuthContext";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./components/Error";
import Loader from "./components/Loader";
import { TaskProvider } from "./context/TaskContext";

const AppLayout = lazy(() => import("./components/AppLayout"));
const Customers = lazy(() => import("./pages/Customers"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Reports = lazy(() => import("./pages/Reports"));

const router = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <TaskProvider>
        <ProtectedRoute>
          <Suspense fallback={<Loader />}>
            <AppLayout />
          </Suspense>
        </ProtectedRoute>
      </TaskProvider>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/tickets",
        element: <Tasks />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
