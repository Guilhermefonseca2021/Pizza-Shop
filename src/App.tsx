import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  )
}
