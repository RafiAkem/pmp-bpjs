"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "BPJS", value: 67.4, amount: 3200000, count: 56 },
  { name: "Mandiri", value: 32.6, amount: 1550000, count: 33 },
]

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"]

export function PaymentMethodChart() {
  return (
    <ChartContainer
      config={{
        bpjs: { label: "BPJS", color: "hsl(var(--chart-1))" },
        mandiri: { label: "Mandiri", color: "hsl(var(--chart-2))" },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <ChartTooltip
            content={<ChartTooltipContent />}
            formatter={(value: number, name: string, props: any) => [
              `${value}% (${props.payload.count} transaksi)`,
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
