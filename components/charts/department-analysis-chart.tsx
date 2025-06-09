"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Rawat Jalan", value: 35, amount: 420000000 },
  { name: "Rawat Inap", value: 30, amount: 360000000 },
  { name: "IGD", value: 20, amount: 240000000 },
  { name: "Operasi", value: 10, amount: 120000000 },
  { name: "Lainnya", value: 5, amount: 60000000 },
]

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function DepartmentAnalysisChart() {
  return (
    <ChartContainer
      config={{
        rawatJalan: { label: "Rawat Jalan", color: "hsl(var(--chart-1))" },
        rawatInap: { label: "Rawat Inap", color: "hsl(var(--chart-2))" },
        igd: { label: "IGD", color: "hsl(var(--chart-3))" },
        operasi: { label: "Operasi", color: "hsl(var(--chart-4))" },
        lainnya: { label: "Lainnya", color: "hsl(var(--chart-5))" },
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
              `${value}% (Rp ${(props.payload.amount / 1000000).toFixed(1)}M)`,
              name,
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
