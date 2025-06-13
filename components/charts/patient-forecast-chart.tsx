"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Data includes historical data and forecast data
const data = [
  {
    month: "Jan",
    total: 6200,
    bpjs: 4100,
    mandiri: 2100,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "Feb",
    total: 6500,
    bpjs: 4300,
    mandiri: 2200,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "Mar",
    total: 6800,
    bpjs: 4500,
    mandiri: 2300,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "Apr",
    total: 7100,
    bpjs: 4700,
    mandiri: 2400,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "May",
    total: 7400,
    bpjs: 4900,
    mandiri: 2500,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "Jun",
    total: 7800,
    bpjs: 5200,
    mandiri: 2600,
    forecastTotal: null,
    forecastBPJS: null,
    forecastMandiri: null,
    isHistorical: true,
  },
  {
    month: "Jul",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 8100,
    forecastBPJS: 5400,
    forecastMandiri: 2700,
    isHistorical: false,
  },
  {
    month: "Aug",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 8300,
    forecastBPJS: 5500,
    forecastMandiri: 2800,
    isHistorical: false,
  },
  {
    month: "Sep",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 8450,
    forecastBPJS: 5680,
    forecastMandiri: 2770,
    isHistorical: false,
  },
  {
    month: "Oct",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 8600,
    forecastBPJS: 5750,
    forecastMandiri: 2850,
    isHistorical: false,
  },
  {
    month: "Nov",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 8800,
    forecastBPJS: 5850,
    forecastMandiri: 2950,
    isHistorical: false,
  },
  {
    month: "Dec",
    total: null,
    bpjs: null,
    mandiri: null,
    forecastTotal: 9000,
    forecastBPJS: 6000,
    forecastMandiri: 3000,
    isHistorical: false,
  },
]

export function PatientForecastChart() {
  return (
    <ChartContainer
      config={{
        total: {
          label: "Total Pasien Aktual",
          color: "hsl(var(--chart-1))",
        },
        bpjs: {
          label: "Pasien BPJS Aktual",
          color: "hsl(var(--chart-2))",
        },
        mandiri: {
          label: "Pasien Mandiri Aktual",
          color: "hsl(var(--chart-3))",
        },
        forecastTotal: {
          label: "Proyeksi Total",
          color: "hsl(var(--chart-1))",
        },
        forecastBPJS: {
          label: "Proyeksi BPJS",
          color: "hsl(var(--chart-2))",
        },
        forecastMandiri: {
          label: "Proyeksi Mandiri",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <ReferenceLine x="Jun" stroke="#888" strokeDasharray="3 3" label={{ value: "Saat Ini", position: "top" }} />

          {/* Historical data lines */}
          <Line
            type="monotone"
            dataKey="total"
            stroke="var(--color-total)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Total Pasien Aktual"
          />
          <Line
            type="monotone"
            dataKey="bpjs"
            stroke="var(--color-bpjs)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Pasien BPJS Aktual"
          />
          <Line
            type="monotone"
            dataKey="mandiri"
            stroke="var(--color-mandiri)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Pasien Mandiri Aktual"
          />

          {/* Forecast data lines */}
          <Line
            type="monotone"
            dataKey="forecastTotal"
            stroke="var(--color-forecastTotal)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi Total"
          />
          <Line
            type="monotone"
            dataKey="forecastBPJS"
            stroke="var(--color-forecastBPJS)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi BPJS"
          />
          <Line
            type="monotone"
            dataKey="forecastMandiri"
            stroke="var(--color-forecastMandiri)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Proyeksi Mandiri"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
