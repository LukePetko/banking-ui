import { useTenant } from "@/TenantContext";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const { currentTenant } = useTenant();

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-12">
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
            <CardFooter>
              <a
                href={`${currentTenant?.id}/labels/${label.id}`}
                className="text-zinc-500 hover:text-zinc-700 hover:underline text-sm"
              >
                Detail →
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
