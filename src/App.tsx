import { Outlet, useNavigate } from "react-router";
import { useTenant } from "./TenantContext";
import { useEffect } from "react";

function App() {
  const { currentTenant } = useTenant();

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentTenant) {
      navigate("/login");
      return;
    }

    if (location.pathname === "/" || location.pathname === "/login") {
      navigate(`/tenant/${currentTenant.id}`);
    }
  }, [currentTenant, navigate]);

  return <Outlet />;
}

export default App;
