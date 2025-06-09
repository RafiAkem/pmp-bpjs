"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Download,
  FileText,
  Filter,
  TrendingUp,
  DollarSign,
  Users,
  CreditCard,
  Receipt,
  BarChart3,
  Printer,
  RefreshCw,
} from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { DailyRevenueChart } from "@/components/charts/daily-revenue-chart"
import { PaymentMethodChart } from "@/components/charts/payment-method-chart"

export default function LaporanHarianPage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [activeTab, setActiveTab] = useState("ringkasan")

  const dailyStats = {
    totalRevenue: 4750000,
    bpjsRevenue: 3200000,
    mandiriRevenue: 1550000,
    totalTransactions: 89,
    bpjsTransactions: 56,
    mandiriTransactions: 33,
    totalPatients: 78,
    newPatients: 12,
  }

  const transactionData = [
    {
      id: "TXN-2024-001",
      time: "08:30",
      patient: "Ahmad Rizki",
      type: "BPJS",
      service: "Rawat Jalan",
      doctor: "Dr. Ahmad",
      amount: 250000,
      status: "Selesai",
    },
    {
      id: "TXN-2024-002",
      time: "09:15",
      patient: "Siti Nurhaliza",
      type: "Mandiri",
      service: "Konsultasi",
      doctor: "Dr. Siti",
      amount: 150000,
      status: "Selesai",
    },
    {
      id: "TXN-2024-003",
      time: "10:00",
      patient: "Budi Santoso",
      type: "BPJS",
      service: "IGD",
      doctor: "Dr. Budi",
      amount: 500000,
      status: "Selesai",
    },
    {
      id: "TXN-2024-004",
      time: "10:45",
      patient: "Maya Sari",
      type: "Mandiri",
      service: "Pemeriksaan",
      doctor: "Dr. Maya",
      amount: 300000,
      status: "Selesai",
    },
    {
      id: "TXN-2024-005",
      time: "11:30",
      patient: "Andi Wijaya",
      type: "BPJS",
      service: "Rawat Jalan",
      doctor: "Dr. Andi",
      amount: 200000,
      status: "Selesai",
    },
  ]

  const serviceStats = [
    { service: "Rawat Jalan", count: 45, revenue: 2250000, percentage: 47.4 },
    { service: "Konsultasi", count: 25, revenue: 1250000, percentage: 26.3 },
    { service: "IGD", count: 12, revenue: 900000, percentage: 18.9 },
    { service: "Pemeriksaan", count: 7, revenue: 350000, percentage: 7.4 },
  ]

  const doctorStats = [
    { doctor: "Dr. Ahmad Rizki", patients: 18, revenue: 1200000 },
    { doctor: "Dr. Siti Nurhaliza", patients: 15, revenue: 950000 },
    { doctor: "Dr. Budi Santoso", patients: 12, revenue: 800000 },
    { doctor: "Dr. Maya Sari", patients: 10, revenue: 650000 },
    { doctor: "Dr. Andi Wijaya", patients: 8, revenue: 500000 },
  ]

  const handleGenerateReport = () => {
    alert("Laporan harian berhasil digenerate dan siap untuk diunduh!")
  }

  const handlePrintReport = () => {
    window.print()
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="bendahara" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Laporan Harian</h1>
          <p className="text-gray-600">Laporan transaksi dan keuangan harian</p>
        </div>

        {/* Date Selector & Actions */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Laporan Tanggal {new Date(selectedDate).toLocaleDateString("id-ID")}</CardTitle>
                <CardDescription>Pilih tanggal untuk melihat laporan harian</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full sm:w-auto"
                />
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline" onClick={handlePrintReport}>
                  <Printer className="h-4 w-4 mr-2" />
                  Cetak
                </Button>
                <Button onClick={handleGenerateReport}>
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp {dailyStats.totalRevenue.toLocaleString("id-ID")}</div>
              <p className="text-xs text-muted-foreground">
                BPJS: Rp {dailyStats.bpjsRevenue.toLocaleString("id-ID")} | Mandiri: Rp{" "}
                {dailyStats.mandiriRevenue.toLocaleString("id-ID")}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Transaksi</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dailyStats.totalTransactions}</div>
              <p className="text-xs text-muted-foreground">
                BPJS: {dailyStats.bpjsTransactions} | Mandiri: {dailyStats.mandiriTransactions}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pasien</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dailyStats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">Pasien baru: {dailyStats.newPatients}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rata-rata per Transaksi</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                Rp {Math.round(dailyStats.totalRevenue / dailyStats.totalTransactions).toLocaleString("id-ID")}
              </div>
              <p className="text-xs text-muted-foreground">Per transaksi hari ini</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="ringkasan">Ringkasan</TabsTrigger>
            <TabsTrigger value="transaksi">Detail Transaksi</TabsTrigger>
            <TabsTrigger value="analisis">Analisis</TabsTrigger>
          </TabsList>

          <TabsContent value="ringkasan">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tren Pendapatan Harian</CardTitle>
                  <CardDescription>Pendapatan per jam dalam sehari</CardDescription>
                </CardHeader>
                <CardContent>
                  <DailyRevenueChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Metode Pembayaran</CardTitle>
                  <CardDescription>Perbandingan BPJS vs Mandiri</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentMethodChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistik per Layanan</CardTitle>
                  <CardDescription>Pendapatan berdasarkan jenis layanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serviceStats.map((service) => (
                      <div key={service.service} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{service.service}</span>
                            <span className="text-sm text-muted-foreground">{service.percentage}%</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>{service.count} transaksi</span>
                            <span>Rp {service.revenue.toLocaleString("id-ID")}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${service.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performa Dokter</CardTitle>
                  <CardDescription>Pendapatan per dokter hari ini</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {doctorStats.map((doctor, index) => (
                      <div key={doctor.doctor} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{doctor.doctor}</p>
                            <p className="text-sm text-muted-foreground">{doctor.patients} pasien</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">Rp {doctor.revenue.toLocaleString("id-ID")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transaksi">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Detail Transaksi Harian</CardTitle>
                    <CardDescription>
                      Daftar semua transaksi pada tanggal {new Date(selectedDate).toLocaleDateString("id-ID")}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Waktu</TableHead>
                      <TableHead>No. Transaksi</TableHead>
                      <TableHead>Pasien</TableHead>
                      <TableHead>Jenis</TableHead>
                      <TableHead>Layanan</TableHead>
                      <TableHead>Dokter</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionData.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.time}</TableCell>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.patient}</TableCell>
                        <TableCell>
                          <Badge variant={transaction.type === "BPJS" ? "default" : "secondary"}>
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.service}</TableCell>
                        <TableCell>{transaction.doctor}</TableCell>
                        <TableCell className="text-right">Rp {transaction.amount.toLocaleString("id-ID")}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">{transaction.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Analisis Keuangan Harian</CardTitle>
                  <CardDescription>Insight dan tren dari data hari ini</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-800">Kontribusi BPJS</span>
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {((dailyStats.bpjsRevenue / dailyStats.totalRevenue) * 100).toFixed(1)}%
                      </div>
                      <p className="text-xs text-blue-600">dari total pendapatan</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800">Kontribusi Mandiri</span>
                        <BarChart3 className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {((dailyStats.mandiriRevenue / dailyStats.totalRevenue) * 100).toFixed(1)}%
                      </div>
                      <p className="text-xs text-green-600">dari total pendapatan</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Insight Hari Ini</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">Peak Hour</p>
                          <p className="text-xs text-muted-foreground">Jam tersibuk: 10:00-11:00 dengan 15 transaksi</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">Layanan Terpopuler</p>
                          <p className="text-xs text-muted-foreground">
                            Rawat Jalan mendominasi dengan 47.4% dari total transaksi
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="text-sm font-medium">Performa Target</p>
                          <p className="text-xs text-muted-foreground">Mencapai 112% dari target harian (Rp 4.2M)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Perbandingan</CardTitle>
                  <CardDescription>vs hari sebelumnya</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-bold text-green-600">+15.2%</div>
                    <p className="text-sm text-muted-foreground">Pendapatan</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-bold text-blue-600">+8.5%</div>
                    <p className="text-sm text-muted-foreground">Transaksi</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-bold text-purple-600">+12.1%</div>
                    <p className="text-sm text-muted-foreground">Pasien</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-lg font-bold text-orange-600">+6.3%</div>
                    <p className="text-sm text-muted-foreground">Rata-rata Transaksi</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
