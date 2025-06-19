import { Outlet, useNavigate } from "react-router";
import { useTenant } from "./TenantContext";
import { useEffect } from "react";

function App() {
  const { isLoggedIn } = useTenant();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
}

export default App;
