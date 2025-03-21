import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const quearyClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={quearyClient}>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </QueryClientProvider>
  </StrictMode>
);
