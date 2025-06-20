import { getLabel } from "@/mock";
import { useTenant } from "@/TenantContext";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { numberToMonth } from "@/utils/numberToMonth";
import { DEFAULT_COLOR } from "@/constants";

const LabelDashboard = () => {
  const { setCurrentLabel, currentLabel, currentTenant } = useTenant();
  const { labelId, tenantId } = useParams();

  const revenueData = currentLabel?.revenue.months.map((revenue, index) => ({
    revenue,
    month: index + 1,
  }));

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color:
        currentLabel?.primaryColor ??
        currentTenant?.primaryColor ??
        DEFAULT_COLOR,
    },
  } satisfies ChartConfig;

  useEffect(() => {
    if (!currentLabel && labelId && tenantId) {
      setCurrentLabel(getLabel(tenantId, labelId));
    }
  }, [labelId]);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-4 pt-24 p-4">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, <span className="text-[var(--primary)]">{currentLabel?.name}</span>!
      </h1>
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

export default LabelDashboard;
