import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import Dashboard from "./pages/app/Dashboard";
import Auth from "./pages/auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/sign-in", element: <Auth /> }
    ]
  }
]);
