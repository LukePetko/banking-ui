import DashboardLayout from "@/components/DashboardLayout";
import TenantDashboard from "@/components/TenantDashboard";
import LabelDashboard from "@/components/LabelDashboard";
import TenantSettings from "@/components/TenantSettings";
import LabelSettings from "@/components/LabelSettings";
import Login from "@/components/Login";
import App from "@/App.tsx";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
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
          {
            path: "/tenant/:tenantId/settings",
            Component: TenantSettings,
          },
          {
            path: "/tenant/:tenantId/label/:labelId/settings",
            Component: LabelSettings,
          },
        ],
      },
    ],
  },
]);
