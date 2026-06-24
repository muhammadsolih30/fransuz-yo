import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SitePreferencesProvider } from "./contexts/SitePreferencesContext";
import { getRouter } from "./router";
import "./styles.css";

const queryClient = new QueryClient();
const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SitePreferencesProvider>
        <RouterProvider router={router} />
      </SitePreferencesProvider>
    </QueryClientProvider>
  </StrictMode>,
);
