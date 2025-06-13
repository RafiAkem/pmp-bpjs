"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Data for financial summary
const data = [
  {
    month: "Jan",
    bpjs: 650000000,
    mandiri: 200000000,
    total: 850000000,
  },
  {
    month: "Feb",
    bpjs: 700000000,
    mandiri: 220000000,
    total: 920000000,
  },
  {
    month: "Mar",
    bpjs: 740000000,
    mandiri: 240000000,
    total: 980000000,
  },
  {
    month: "Apr",
    bpjs: 780000000,
    mandiri: 270000000,
    total: 1050000000,
  },
  {
    month: "May",
    bpjs: 820000000,
    mandiri: 280000000,
    total: 1100000000,
  },
  {
    month: "Jun",
    bpjs: 880000000,
    mandiri: 300000000,
    total: 1180000000,
  },
]

// Format large numbers to billions/millions
const formatCurrency = (value: number) => {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(1)}B`
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`
  }
  return value.toString()
}

export function FinancialSummaryChart() {
  return (
    <ChartContainer
      config={{
        bpjs: {
          label: "Pendapatan BPJS",
          color: "hsl(var(--chart-1))",
        },
        mandiri: {
          label: "Pendapatan Mandiri",
          color: "hsl(var(--chart-2))",
        },
        total: {
          label: "Total Pendapatan",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatCurrency} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />

          <Bar dataKey="bpjs" fill="var(--color-bpjs)" name="Pendapatan BPJS" />
          <Bar dataKey="mandiri" fill="var(--color-mandiri)" name="Pendapatan Mandiri" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
