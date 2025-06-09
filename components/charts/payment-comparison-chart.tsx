"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jul", bpjs: 600, mandiri: 250 },
  { month: "Aug", bpjs: 650, mandiri: 270 },
  { month: "Sep", bpjs: 750, mandiri: 300 },
  { month: "Oct", bpjs: 700, mandiri: 280 },
  { month: "Nov", bpjs: 820, mandiri: 330 },
  { month: "Dec", bpjs: 850, mandiri: 350 },
]

export function PaymentComparisonChart() {
  return (
    <ChartContainer
      config={{
        bpjs: {
          label: "BPJS",
          color: "hsl(var(--chart-1))",
        },
        mandiri: {
          label: "Mandiri",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value}M`} />
          <ChartTooltip content={<ChartTooltipContent />} formatter={(value: number) => [`Rp ${value}M`, ""]} />
          <Bar dataKey="bpjs" fill="var(--color-bpjs)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="mandiri" fill="var(--color-mandiri)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
