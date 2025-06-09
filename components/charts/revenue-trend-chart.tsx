"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jul", revenue: 850000000, bpjs: 600000000, mandiri: 250000000 },
  { month: "Aug", revenue: 920000000, bpjs: 650000000, mandiri: 270000000 },
  { month: "Sep", revenue: 1050000000, bpjs: 750000000, mandiri: 300000000 },
  { month: "Oct", revenue: 980000000, bpjs: 700000000, mandiri: 280000000 },
  { month: "Nov", revenue: 1150000000, bpjs: 820000000, mandiri: 330000000 },
  { month: "Dec", revenue: 1200000000, bpjs: 850000000, mandiri: 350000000 },
]

export function RevenueTrendChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Total Revenue",
          color: "hsl(var(--chart-1))",
        },
        bpjs: {
          label: "BPJS",
          color: "hsl(var(--chart-2))",
        },
        mandiri: {
          label: "Mandiri",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${(value / 1000000000).toFixed(1)}B`} />
          <ChartTooltip
            content={<ChartTooltipContent />}
            formatter={(value: number) => [`Rp ${(value / 1000000).toFixed(1)}M`, ""]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={3}
            dot={{ fill: "var(--color-revenue)" }}
          />
          <Line type="monotone" dataKey="bpjs" stroke="var(--color-bpjs)" strokeWidth={2} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="mandiri" stroke="var(--color-mandiri)" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
