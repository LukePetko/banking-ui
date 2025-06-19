import { useTenant } from "@/TenantContext";
import { Button } from "./ui/button";

const Dashboard = () => {
  const { logout } = useTenant();
  return (
    <div>
      Dashboard
      <Button onClick={logout}>logout</Button>
    </div>
  );
};

export default Dashboard;
