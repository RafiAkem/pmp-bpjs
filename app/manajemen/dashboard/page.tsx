"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, FileText, Download, DollarSign, Users, Activity, Target } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
// Remove these lines:
// import Chart1 from "@/data-chart/line/1"
// import Chart2 from "@/data-chart/bar/1"
// import Chart3 from "@/data-chart/pie/1"
// import { ChartWrapper } from "@/data-chart/wrapper"

import { RevenueTrendChart } from "@/components/charts/revenue-trend-chart"
import { PaymentComparisonChart } from "@/components/charts/payment-comparison-chart"
import { DepartmentAnalysisChart } from "@/components/charts/department-analysis-chart"

export default function ManajemenDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="manajemen" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Manajemen</h1>
          <p className="text-gray-600">Analisis keuangan dan laporan strategis</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendapatan Bulanan</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 1.2B</div>
              <p className="text-xs text-muted-foreground">+15% dari bulan lalu</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pasien Aktif</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+8% dari bulan lalu</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Efisiensi Klaim</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% dari target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ROI</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18.5%</div>
              <p className="text-xs text-muted-foreground">+3.2% YoY</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Tren Pendapatan</CardTitle>
              <CardDescription>Analisis pendapatan 6 bulan terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueTrendChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perbandingan BPJS vs Mandiri</CardTitle>
              <CardDescription>Distribusi sumber pendapatan</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentComparisonChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Analisis Departemen</CardTitle>
              <CardDescription>Kontribusi pendapatan per departemen</CardDescription>
            </CardHeader>
            <CardContent>
              <DepartmentAnalysisChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Laporan Cepat</CardTitle>
              <CardDescription>Unduh laporan keuangan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Laporan Bulanan
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Analisis Tren
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="mr-2 h-4 w-4" />
                Dashboard Eksekutif
              </Button>
              <Link href="/manajemen/reports">
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="mr-2 h-4 w-4" />
                  Semua Laporan
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Metrik Kunci</CardTitle>
            <CardDescription>Indikator performa utama bulan ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">72%</div>
                <p className="text-sm text-muted-foreground">Tingkat Kepuasan Pasien</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">4.2 hari</div>
                <p className="text-sm text-muted-foreground">Rata-rata Proses Klaim</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">96.8%</div>
                <p className="text-sm text-muted-foreground">Akurasi Data Keuangan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
