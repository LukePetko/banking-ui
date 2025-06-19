import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import TenantProvider from "./TenantContext";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

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
        path: "/dashboard",
        Component: Dashboard,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TenantProvider>
      <RouterProvider router={router} />
    </TenantProvider>
  </React.StrictMode>,
);
