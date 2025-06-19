import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import TenantProvider from "./TenantContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TenantProvider>
      <App />
    </TenantProvider>
  </React.StrictMode>,
);
