import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        {/* template de titulos  %S substituido POR TITULO CADA AQUELA PAGINA*/}
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster />
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}
