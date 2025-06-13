"use client"

import {
  Line,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Data includes historical data and forecast data
const data = [
  {
    month: "Jan",
    claimCount: 2100,
    approvalRate: 91.2,
    avgProcessDays: 5.2,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "Feb",
    claimCount: 2200,
    approvalRate: 91.8,
    avgProcessDays: 5.0,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "Mar",
    claimCount: 2300,
    approvalRate: 92.5,
    avgProcessDays: 4.8,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "Apr",
    claimCount: 2450,
    approvalRate: 93.0,
    avgProcessDays: 4.6,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "May",
    claimCount: 2550,
    approvalRate: 93.5,
    avgProcessDays: 4.4,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "Jun",
    claimCount: 2650,
    approvalRate: 93.8,
    avgProcessDays: 4.2,
    forecastCount: null,
    forecastApproval: null,
    forecastDays: null,
    isHistorical: true,
  },
  {
    month: "Jul",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 2750,
    forecastApproval: 94.0,
    forecastDays: 4.1,
    isHistorical: false,
  },
  {
    month: "Aug",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 2800,
    forecastApproval: 94.2,
    forecastDays: 4.0,
    isHistorical: false,
  },
  {
    month: "Sep",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 2840,
    forecastApproval: 94.5,
    forecastDays: 4.0,
    isHistorical: false,
  },
  {
    month: "Oct",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 2900,
    forecastApproval: 94.8,
    forecastDays: 3.9,
    isHistorical: false,
  },
  {
    month: "Nov",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 2950,
    forecastApproval: 95.0,
    forecastDays: 3.8,
    isHistorical: false,
  },
  {
    month: "Dec",
    claimCount: null,
    approvalRate: null,
    avgProcessDays: null,
    forecastCount: 3000,
    forecastApproval: 95.2,
    forecastDays: 3.7,
    isHistorical: false,
  },
]

export function ClaimTrendChart() {
  return (
    <ChartContainer
      config={{
        claimCount: {
          label: "Jumlah Klaim Aktual",
          color: "hsl(var(--chart-1))",
        },
        approvalRate: {
          label: "Tingkat Persetujuan Aktual (%)",
          color: "hsl(var(--chart-2))",
        },
        avgProcessDays: {
          label: "Rata-rata Hari Proses Aktual",
          color: "hsl(var(--chart-3))",
        },
        forecastCount: {
          label: "Proyeksi Jumlah Klaim",
          color: "hsl(var(--chart-1))",
        },
        forecastApproval: {
          label: "Proyeksi Tingkat Persetujuan (%)",
          color: "hsl(var(--chart-2))",
        },
        forecastDays: {
          label: "Proyeksi Rata-rata Hari Proses",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[85, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <ReferenceLine x="Jun" stroke="#888" strokeDasharray="3 3" label={{ value: "Saat Ini", position: "top" }} />

          {/* Historical data */}
          <Bar yAxisId="left" dataKey="claimCount" fill="var(--color-claimCount)" name="Jumlah Klaim Aktual" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="approvalRate"
            stroke="var(--color-approvalRate)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Tingkat Persetujuan Aktual (%)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="avgProcessDays"
            stroke="var(--color-avgProcessDays)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Rata-rata Hari Proses Aktual"
          />

          {/* Forecast data */}
          <Bar
            yAxisId="left"
            dataKey="forecastCount"
            fill="var(--color-forecastCount)"
            fillOpacity={0.6}
            name="Proyeksi Jumlah Klaim"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="forecastApproval"
            stroke="var(--color-forecastApproval)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi Tingkat Persetujuan (%)"
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="forecastDays"
            stroke="var(--color-forecastDays)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi Rata-rata Hari Proses"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
