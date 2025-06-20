import { useTenant } from "@/TenantContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const TenantDashboard = () => {
  const { currentTenant, currentLabel, setCurrentLabel } = useTenant();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentLabel) {
      setCurrentLabel(undefined);
    }
  }, [currentLabel]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {currentTenant?.name}!
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {Object.values(currentTenant?.labels ?? {}).map((label) => (
          <Card key={label.id}>
            <CardHeader>
              <CardTitle>{label.name}</CardTitle>
              <CardDescription>
                {label.country ?? currentTenant?.country}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter
              className="text-zinc-500 hover:text-zinc-700 hover:underline text-sm"
              onClick={() =>
                navigate(`/tenant/${currentTenant?.id}/label/${label.id}`)
              }
            >
              Detail →
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TenantDashboard;
