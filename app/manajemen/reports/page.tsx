"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Calendar, Filter, Printer, FileText } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { FinancialSummaryChart } from "@/components/charts/financial-summary-chart"
import { ServiceDistributionChart } from "@/components/charts/service-distribution-chart"

export default function ManajemenReportsPage() {
  const [dateRange, setDateRange] = useState("month")

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="manajemen" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Laporan Keuangan</h1>
          <p className="text-gray-600">Analisis pendapatan dan kinerja keuangan</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Select defaultValue={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih periode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Hari Ini</SelectItem>
                <SelectItem value="week">Minggu Ini</SelectItem>
                <SelectItem value="month">Bulan Ini</SelectItem>
                <SelectItem value="quarter">Kuartal Ini</SelectItem>
                <SelectItem value="year">Tahun Ini</SelectItem>
                <SelectItem value="custom">Kustom</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Pilih Tanggal
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Cetak
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-[600px]">
            <TabsTrigger value="summary">Ringkasan</TabsTrigger>
            <TabsTrigger value="bpjs">BPJS</TabsTrigger>
            <TabsTrigger value="mandiri">Mandiri</TabsTrigger>
            <TabsTrigger value="details">Detail</TabsTrigger>
          </TabsList>

          {/* Summary Tab */}
          <TabsContent value="summary" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pendapatan</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 1.18M</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">+7.3%</Badge>
                    <span className="text-xs text-muted-foreground">vs bulan lalu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pendapatan BPJS</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 880jt</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">+7.3%</Badge>
                    <span className="text-xs text-muted-foreground">vs bulan lalu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pendapatan Mandiri</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 300jt</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">+7.1%</Badge>
                    <span className="text-xs text-muted-foreground">vs bulan lalu</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Jumlah Transaksi</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7,842</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">+5.4%</Badge>
                    <span className="text-xs text-muted-foreground">vs bulan lalu</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Financial Summary Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Keuangan</CardTitle>
                <CardDescription>Pendapatan BPJS vs Mandiri 6 bulan terakhir</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <FinancialSummaryChart />
                </div>
              </CardContent>
            </Card>

            {/* Service Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Layanan</CardTitle>
                  <CardDescription>Persentase pendapatan berdasarkan jenis layanan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ServiceDistributionChart />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ringkasan Kinerja</CardTitle>
                  <CardDescription>Indikator kinerja keuangan utama</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Rasio BPJS vs Mandiri</span>
                        <span className="text-sm font-medium">74.6% : 25.4%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "74.6%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Tingkat Klaim Sukses BPJS</span>
                        <span className="text-sm font-medium">93.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "93.8%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Rata-rata Nilai Transaksi</span>
                        <span className="text-sm font-medium">Rp 150,470</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Pertumbuhan YoY</span>
                        <span className="text-sm font-medium">+12.4%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Target Pencapaian Q2</span>
                        <span className="text-sm font-medium">98.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "98.5%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Performers */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Departemen dan dokter dengan pendapatan tertinggi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Departemen</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Poli Penyakit Dalam</span>
                          <span className="text-sm font-medium">Rp 280jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Poli Anak</span>
                          <span className="text-sm font-medium">Rp 210jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Poli Bedah</span>
                          <span className="text-sm font-medium">Rp 180jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "64%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Poli Kandungan</span>
                          <span className="text-sm font-medium">Rp 165jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "59%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Poli Gigi</span>
                          <span className="text-sm font-medium">Rp 120jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "43%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Dokter</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">dr. Budi Santoso, Sp.PD</span>
                          <span className="text-sm font-medium">Rp 95jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">dr. Siti Rahayu, Sp.A</span>
                          <span className="text-sm font-medium">Rp 82jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "86%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">dr. Ahmad Wijaya, Sp.B</span>
                          <span className="text-sm font-medium">Rp 78jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">dr. Dewi Lestari, Sp.OG</span>
                          <span className="text-sm font-medium">Rp 75jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "79%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">drg. Hendra Gunawan</span>
                          <span className="text-sm font-medium">Rp 68jt</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* BPJS Tab */}
          <TabsContent value="bpjs">
            <Card>
              <CardHeader>
                <CardTitle>Laporan BPJS</CardTitle>
                <CardDescription>Detail laporan pendapatan BPJS</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Konten laporan BPJS akan ditampilkan di sini.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mandiri Tab */}
          <TabsContent value="mandiri">
            <Card>
              <CardHeader>
                <CardTitle>Laporan Mandiri</CardTitle>
                <CardDescription>Detail laporan pendapatan mandiri</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Konten laporan mandiri akan ditampilkan di sini.</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Details Tab */}
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Detail Transaksi</CardTitle>
                <CardDescription>Daftar lengkap transaksi dalam periode yang dipilih</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Konten detail transaksi akan ditampilkan di sini.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
