import { useTenant } from "@/TenantContext";
import { Button } from "./ui/button";

const Login = () => {
  const { login } = useTenant();

  return (
    <div>
      <Button onClick={() => login("BigBank")}>Login</Button>
    </div>
  );
};

export default Login;
