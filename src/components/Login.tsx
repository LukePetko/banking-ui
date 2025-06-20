import { useTenant } from "@/TenantContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Login = () => {
  const { login } = useTenant();

  const [bankName, setBankName] = useState<string>("");
    const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = login(bankName);

    if (!id) {
      toast.error("Invalid bank name");
    }

    navigate(`/tenant/${id}`);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <form
        className="w-full max-w-lg flex flex-col gap-4 px-6 pt-12 pb-6 border-zinc-300 bg-white border rounded-md shadow-zinc-400 shadow-lg mb-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold mb-6">Login to your bank!</h1>
        <Input
          placeholder="Bank Name"
          className="h-12 !text-lg"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
        <div className="w-full flex justify-between gap-2">
          <Button
            className="flex-1 h-12 text-lg"
            variant="outline"
            onClick={() => toast.info("Try BigBank or TrustBank")}
            type="button"
          >
            Forgot name?
          </Button>
          <Button className="flex-1 h-12 text-lg" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
