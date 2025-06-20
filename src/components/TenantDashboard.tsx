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
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { numberToMonth } from "@/utils/numberToMonth";
import { DEFAULT_COLOR } from "@/constants";

const TenantDashboard = () => {
  const { currentTenant, currentLabel, setCurrentLabel } = useTenant();
  const navigate = useNavigate();

  const revenueData = currentTenant?.revenue.months.map((revenue, index) => ({
    revenue,
    month: index + 1,
  }));

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: currentTenant?.primaryColor ?? DEFAULT_COLOR,
    },
  } satisfies ChartConfig;

  useEffect(() => {
    if (currentLabel) {
      setCurrentLabel(undefined);
    }
  }, [currentLabel]);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4 pt-24 p-4">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, <span className="text-[var(--primary)]">{currentTenant?.name}</span>!
      </h1>
      <div>
        <h2 className="text-2xl font-bold mb-6">Labels</h2>
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
                Last month revenue:{" "}
                <span className="font-semibold">
                  {label.revenue.months.at(-1)}
                </span>
                €
              </CardContent>
              <CardFooter
                className="text-zinc-500 hover:text-zinc-700 hover:underline text-sm cursor-pointer"
                onClick={() =>
                  navigate(`/tenant/${currentTenant?.id}/label/${label.id}`)
                }
              >
                Detail →
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Revenue</h2>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] max-h-80 w-full"
        >
          <BarChart accessibilityLayer data={revenueData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => numberToMonth(value).slice(0, 3)}
            />
            <ChartTooltip
              content={<ChartTooltipContent className="min-w-[160px]" />}
            />

            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TenantDashboard;
