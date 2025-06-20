import React from "react";
import ReactDOM from "react-dom/client";
import TenantProvider from "@/TenantContext";
import { RouterProvider } from "react-router";
import "@/index.css";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TenantProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </TenantProvider>
  </React.StrictMode>,
);
