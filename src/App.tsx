import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <ThemeProvider storageKey="pizza.shop" defaultTheme="dark">
        {/* template de titulos  %S substituido POR TITULO CADA AQUELA PAGINA*/}
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}
