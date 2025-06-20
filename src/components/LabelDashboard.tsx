import { getLabel } from "@/mock";
import { useTenant } from "@/TenantContext";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { numberToMonth } from "@/utils/numberToMonth";

const LabelDashboard = () => {
  const { setCurrentLabel, currentLabel } = useTenant();
  const { labelId, tenantId } = useParams();

  const revenueData = currentLabel?.revenue.months.map((revenue, index) => ({
    revenue,
    month: index + 1,
  }));

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    if (!currentLabel && labelId && tenantId) {
      setCurrentLabel(getLabel(tenantId, labelId));
    }
  }, [labelId]);

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {currentLabel?.name}!
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
    </>
  );
};

export default LabelDashboard;
