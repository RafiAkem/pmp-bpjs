"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { hour: "08:00", revenue: 150000, transactions: 3 },
  { hour: "09:00", revenue: 320000, transactions: 6 },
  { hour: "10:00", revenue: 580000, transactions: 12 },
  { hour: "11:00", revenue: 750000, transactions: 15 },
  { hour: "12:00", revenue: 420000, transactions: 8 },
  { hour: "13:00", revenue: 380000, transactions: 7 },
  { hour: "14:00", revenue: 650000, transactions: 13 },
  { hour: "15:00", revenue: 720000, transactions: 14 },
  { hour: "16:00", revenue: 480000, transactions: 9 },
  { hour: "17:00", revenue: 290000, transactions: 5 },
]

export function DailyRevenueChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Pendapatan",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="hour" />
          <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
          <ChartTooltip
            content={<ChartTooltipContent />}
            formatter={(value: number) => [`Rp ${(value / 1000).toFixed(0)}K`, "Pendapatan"]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={3}
            dot={{ fill: "var(--color-revenue)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
