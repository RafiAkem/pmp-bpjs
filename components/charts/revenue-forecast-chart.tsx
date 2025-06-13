"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Data includes historical data and forecast data
const data = [
  { month: "Jan", revenue: 850000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  { month: "Feb", revenue: 920000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  { month: "Mar", revenue: 980000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  { month: "Apr", revenue: 1050000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  { month: "May", revenue: 1100000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  { month: "Jun", revenue: 1180000000, forecast: null, forecastLower: null, forecastUpper: null, isHistorical: true },
  {
    month: "Jul",
    revenue: null,
    forecast: 1250000000,
    forecastLower: 1200000000,
    forecastUpper: 1300000000,
    isHistorical: false,
  },
  {
    month: "Aug",
    revenue: null,
    forecast: 1320000000,
    forecastLower: 1250000000,
    forecastUpper: 1390000000,
    isHistorical: false,
  },
  {
    month: "Sep",
    revenue: null,
    forecast: 1380000000,
    forecastLower: 1300000000,
    forecastUpper: 1460000000,
    isHistorical: false,
  },
  {
    month: "Oct",
    revenue: null,
    forecast: 1450000000,
    forecastLower: 1350000000,
    forecastUpper: 1550000000,
    isHistorical: false,
  },
  {
    month: "Nov",
    revenue: null,
    forecast: 1520000000,
    forecastLower: 1400000000,
    forecastUpper: 1640000000,
    isHistorical: false,
  },
  {
    month: "Dec",
    revenue: null,
    forecast: 1600000000,
    forecastLower: 1450000000,
    forecastUpper: 1750000000,
    isHistorical: false,
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

export function RevenueForecastChart() {
  return (
    <ChartContainer
      config={{
        revenue: {
          label: "Pendapatan Aktual",
          color: "hsl(var(--chart-1))",
        },
        forecast: {
          label: "Proyeksi",
          color: "hsl(var(--chart-2))",
        },
        forecastRange: {
          label: "Rentang Proyeksi",
          color: "hsla(var(--chart-2), 0.2)",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatCurrency} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <ReferenceLine x="Jun" stroke="#888" strokeDasharray="3 3" label={{ value: "Saat Ini", position: "top" }} />

          {/* Historical data line */}
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--color-revenue)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Pendapatan Aktual"
          />

          {/* Forecast data line */}
          <Line
            type="monotone"
            dataKey="forecast"
            stroke="var(--color-forecast)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi"
          />

          {/* Forecast range area */}
          <Line
            type="monotone"
            dataKey="forecastUpper"
            stroke="transparent"
            fill="var(--color-forecastRange)"
            name="Batas Atas"
          />
          <Line
            type="monotone"
            dataKey="forecastLower"
            stroke="transparent"
            fill="var(--color-forecastRange)"
            name="Batas Bawah"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
