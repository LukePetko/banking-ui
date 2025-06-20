import { Outlet, useNavigate } from "react-router";
import { useTenant } from "@/TenantContext";
import { useEffect } from "react";
import { hexToRgb } from "@/utils/hexToRgb";
import { DEFAULT_COLOR } from "@/constants";

function App() {
  const { currentTenant, currentLabel, isLoggedIn } = useTenant();

  const navigate = useNavigate();

  useEffect(() => {
    const hex =
      currentLabel?.primaryColor ?? currentTenant?.primaryColor ?? DEFAULT_COLOR;
    const rgb = hexToRgb(hex);
    document.documentElement.style.setProperty("--primary", hex);
    document.documentElement.style.setProperty("--primary-rgb", rgb);
  }, [currentTenant, currentLabel]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!currentTenant) {
      return;
    }

    if (location.pathname === "/" || location.pathname === "/login") {
      navigate(`/tenant/${currentTenant.id}`);
    }
  }, [currentTenant, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[rgba(var(--primary-rgb),0.05)] to-transparent">
      <Outlet />
    </div>
  );
}

export default App;
