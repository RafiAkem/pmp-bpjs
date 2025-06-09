"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, BarChart3, TrendingUp, Calendar, Filter, Eye } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
// Remove these lines:
// import Chart1 from "@/data-chart/line/2"
// import Chart2 from "@/data-chart/bar/3"
// import Chart3 from "@/data-chart/pie/2"
// import { ChartWrapper } from "@/data-chart/wrapper"

export default function ManajemenReportsPage() {
  const reports = [
    {
      id: "1",
      title: "Laporan Keuangan Bulanan",
      description: "Ringkasan pendapatan dan pengeluaran bulan ini",
      type: "Keuangan",
      date: "2024-01-15",
      status: "Ready",
      size: "2.4 MB",
    },
    {
      id: "2",
      title: "Analisis Tren BPJS",
      description: "Analisis tren klaim dan pembayaran BPJS 6 bulan terakhir",
      type: "Analisis",
      date: "2024-01-14",
      status: "Ready",
      size: "1.8 MB",
    },
    {
      id: "3",
      title: "Dashboard Eksekutif",
      description: "KPI dan metrik utama untuk manajemen",
      type: "Dashboard",
      date: "2024-01-13",
      status: "Processing",
      size: "3.2 MB",
    },
    {
      id: "4",
      title: "Laporan Audit Keuangan",
      description: "Audit trail dan compliance report",
      type: "Audit",
      date: "2024-01-12",
      status: "Ready",
      size: "4.1 MB",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Ready":
        return <Badge className="bg-green-100 text-green-800">Siap</Badge>
      case "Processing":
        return <Badge className="bg-yellow-100 text-yellow-800">Proses</Badge>
      case "Error":
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Keuangan":
        return "bg-blue-100 text-blue-800"
      case "Analisis":
        return "bg-purple-100 text-purple-800"
      case "Dashboard":
        return "bg-green-100 text-green-800"
      case "Audit":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="manajemen" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Laporan & Analisis</h1>
          <p className="text-gray-600">Akses laporan keuangan dan analisis strategis</p>
        </div>

        {/* Summary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tren Pendapatan</CardTitle>
              <CardDescription>6 bulan terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Revenue Trend</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Perbandingan Departemen</CardTitle>
              <CardDescription>Kontribusi pendapatan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Department Comparison</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Distribusi Pembayaran</CardTitle>
              <CardDescription>BPJS vs Mandiri</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Payment Distribution</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Laporan</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Siap Download</p>
                  <p className="text-2xl font-bold">18</p>
                </div>
                <Download className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sedang Proses</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <BarChart3 className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Update Terakhir</p>
                  <p className="text-2xl font-bold">2 jam</p>
                </div>
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Daftar Laporan</CardTitle>
                <CardDescription>Laporan yang tersedia untuk diunduh dan dilihat</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Periode
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                        <span className="text-xs text-gray-500">{report.date}</span>
                        <span className="text-xs text-gray-500">{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusBadge(report.status)}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" disabled={report.status !== "Ready"}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
