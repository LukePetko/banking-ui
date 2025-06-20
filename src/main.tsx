import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import TenantProvider from "./TenantContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import "./index.css";
import { Toaster } from "./components/ui/sonner";
import DashboardLayout from "./components/DashboardLayout";
import TenantDashboard from "./components/TenantDashboard";
import LabelDashboard from "./components/LabelDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/tenant",
        Component: DashboardLayout,
        children: [
          {
            path: "/tenant/:tenantId",
            Component: TenantDashboard,
          },
          {
            path: "/tenant/:tenantId/label/:labelId",
            Component: LabelDashboard,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TenantProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </TenantProvider>
  </React.StrictMode>,
);
