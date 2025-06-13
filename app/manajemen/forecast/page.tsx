"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Download, Calendar, Filter, ArrowRight, AlertTriangle, ChevronUp, ChevronDown } from "lucide-react"
import { Sidebar } from "@/components/sidebar"
import { RevenueForecastChart } from "@/components/charts/revenue-forecast-chart"
import { PatientForecastChart } from "@/components/charts/patient-forecast-chart"
import { ClaimTrendChart } from "@/components/charts/claim-trend-chart"

export default function ManajemenForecastPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="manajemen" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Tren & Forecast</h1>
          <p className="text-gray-600">Analisis tren historis dan prediksi masa depan</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Select defaultValue="6month">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih periode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3month">3 Bulan</SelectItem>
                <SelectItem value="6month">6 Bulan</SelectItem>
                <SelectItem value="1year">1 Tahun</SelectItem>
                <SelectItem value="2year">2 Tahun</SelectItem>
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
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-[600px]">
            <TabsTrigger value="revenue">Pendapatan</TabsTrigger>
            <TabsTrigger value="patients">Pasien</TabsTrigger>
            <TabsTrigger value="claims">Klaim BPJS</TabsTrigger>
            <TabsTrigger value="resources">Sumber Daya</TabsTrigger>
          </TabsList>

          {/* Revenue Forecast Tab */}
          <TabsContent value="revenue" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi Q3 2024</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 3.8B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      12.4%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi Q4 2024</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 4.2B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      10.5%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q3 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi BPJS 2024</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 9.6B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      8.2%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs 2023</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi Mandiri 2024</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 5.2B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      15.6%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs 2023</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Revenue Forecast Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Proyeksi Pendapatan</CardTitle>
                <CardDescription>Tren historis dan proyeksi 6 bulan ke depan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <RevenueForecastChart />
                </div>
              </CardContent>
            </Card>

            {/* Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Insight & Rekomendasi</CardTitle>
                <CardDescription>Analisis berdasarkan data historis dan proyeksi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Tren Pendapatan Positif</p>
                      <p className="text-sm text-gray-600">
                        Proyeksi menunjukkan pertumbuhan pendapatan sebesar 11.8% dalam 6 bulan ke depan, didorong oleh
                        peningkatan pasien BPJS dan layanan spesialistik.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Peluang Pertumbuhan</p>
                      <p className="text-sm text-gray-600">
                        Layanan rawat jalan menunjukkan potensi pertumbuhan tertinggi (18.3%). Pertimbangkan untuk
                        meningkatkan kapasitas dan staf di area ini.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Area Perhatian</p>
                      <p className="text-sm text-gray-600">
                        Pendapatan dari layanan laboratorium menunjukkan perlambatan. Evaluasi harga dan promosi untuk
                        meningkatkan utilisasi.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Forecast Tab */}
          <TabsContent value="patients" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi Pasien Q3</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,450</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      7.2%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pasien Baru (Est.)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,240</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      12.8%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pasien BPJS (Est.)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,680</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      5.4%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pasien Mandiri (Est.)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,770</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      10.8%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Forecast Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Proyeksi Jumlah Pasien</CardTitle>
                <CardDescription>Tren historis dan proyeksi 6 bulan ke depan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <PatientForecastChart />
                </div>
              </CardContent>
            </Card>

            {/* Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Insight & Rekomendasi</CardTitle>
                <CardDescription>Analisis berdasarkan data historis dan proyeksi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Pertumbuhan Pasien Mandiri</p>
                      <p className="text-sm text-gray-600">
                        Proyeksi menunjukkan pertumbuhan signifikan pada segmen pasien mandiri (10.8%). Pertimbangkan
                        untuk meningkatkan layanan premium dan paket kesehatan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Peluang Layanan Baru</p>
                      <p className="text-sm text-gray-600">
                        Dengan proyeksi 1,240 pasien baru, ada peluang untuk memperkenalkan layanan spesialistik baru
                        seperti dermatologi dan geriatri.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Kapasitas Pelayanan</p>
                      <p className="text-sm text-gray-600">
                        Dengan proyeksi peningkatan 7.2% jumlah pasien, perlu evaluasi kapasitas pelayanan terutama di
                        poli anak dan penyakit dalam yang sudah mendekati kapasitas maksimal.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Claims Forecast Tab */}
          <TabsContent value="claims" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Proyeksi Klaim Q3</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,840</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      6.8%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Nilai Klaim (Est.)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 2.4B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      8.2%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tingkat Persetujuan</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.5%</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      1.2%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Waktu Proses (Est.)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.0 hari</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronDown className="h-3 w-3 mr-1" />
                      0.5 hari
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Claims Trend Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Tren & Proyeksi Klaim BPJS</CardTitle>
                <CardDescription>Analisis historis dan proyeksi 6 bulan ke depan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ClaimTrendChart />
                </div>
              </CardContent>
            </Card>

            {/* Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Insight & Rekomendasi</CardTitle>
                <CardDescription>Analisis berdasarkan data historis dan proyeksi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Peningkatan Efisiensi</p>
                      <p className="text-sm text-gray-600">
                        Proyeksi menunjukkan penurunan waktu proses klaim menjadi 4.0 hari, menunjukkan peningkatan
                        efisiensi sistem. Pertahankan momentum ini.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Tingkat Persetujuan Meningkat</p>
                      <p className="text-sm text-gray-600">
                        Proyeksi tingkat persetujuan 94.5% menunjukkan peningkatan kualitas dokumentasi dan proses
                        klaim. Lanjutkan pelatihan staf untuk mempertahankan tren ini.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Antisipasi Peningkatan Volume</p>
                      <p className="text-sm text-gray-600">
                        Dengan proyeksi peningkatan 6.8% jumlah klaim, perlu antisipasi kebutuhan staf dan sistem untuk
                        menangani volume yang lebih tinggi tanpa mengorbankan kualitas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Forecast Tab */}
          <TabsContent value="resources" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Kebutuhan SDM Q3</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+4 orang</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-blue-100 text-blue-800 mr-1">Proyeksi</Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Utilisasi Ruangan</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82.4%</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-green-100 text-green-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      5.2%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Kebutuhan Peralatan</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 320jt</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-blue-100 text-blue-800 mr-1">Estimasi</Badge>
                    <span className="text-xs text-muted-foreground">untuk Q3 2024</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Biaya Operasional</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Rp 1.8B</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-yellow-100 text-yellow-800 mr-1">
                      <ChevronUp className="h-3 w-3 mr-1" />
                      7.8%
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs Q2 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resource Planning */}
            <Card>
              <CardHeader>
                <CardTitle>Perencanaan Sumber Daya</CardTitle>
                <CardDescription>Proyeksi kebutuhan berdasarkan tren pasien dan layanan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Kebutuhan SDM</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 px-4 text-left font-medium">Departemen</th>
                            <th className="py-3 px-4 text-left font-medium">Saat Ini</th>
                            <th className="py-3 px-4 text-left font-medium">Proyeksi Q3</th>
                            <th className="py-3 px-4 text-left font-medium">Selisih</th>
                            <th className="py-3 px-4 text-left font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Perawat</td>
                            <td className="py-3 px-4">42</td>
                            <td className="py-3 px-4">45</td>
                            <td className="py-3 px-4">+3</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-yellow-100 text-yellow-800">Perlu Rekrut</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Admin</td>
                            <td className="py-3 px-4">18</td>
                            <td className="py-3 px-4">19</td>
                            <td className="py-3 px-4">+1</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-yellow-100 text-yellow-800">Perlu Rekrut</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Dokter</td>
                            <td className="py-3 px-4">24</td>
                            <td className="py-3 px-4">24</td>
                            <td className="py-3 px-4">0</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">Mencukupi</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Teknisi Lab</td>
                            <td className="py-3 px-4">8</td>
                            <td className="py-3 px-4">8</td>
                            <td className="py-3 px-4">0</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">Mencukupi</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Farmasi</td>
                            <td className="py-3 px-4">12</td>
                            <td className="py-3 px-4">12</td>
                            <td className="py-3 px-4">0</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-100 text-green-800">Mencukupi</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Kebutuhan Peralatan</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="py-3 px-4 text-left font-medium">Jenis Peralatan</th>
                            <th className="py-3 px-4 text-left font-medium">Estimasi Biaya</th>
                            <th className="py-3 px-4 text-left font-medium">Prioritas</th>
                            <th className="py-3 px-4 text-left font-medium">Jadwal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">USG 4D</td>
                            <td className="py-3 px-4">Rp 180jt</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-red-100 text-red-800">Tinggi</Badge>
                            </td>
                            <td className="py-3 px-4">Juli 2024</td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Peralatan Lab</td>
                            <td className="py-3 px-4">Rp 85jt</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-yellow-100 text-yellow-800">Sedang</Badge>
                            </td>
                            <td className="py-3 px-4">Agustus 2024</td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Komputer & IT</td>
                            <td className="py-3 px-4">Rp 55jt</td>
                            <td className="py-3 px-4">
                              <Badge className="bg-yellow-100 text-yellow-800">Sedang</Badge>
                            </td>
                            <td className="py-3 px-4">September 2024</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Insight & Rekomendasi</CardTitle>
                <CardDescription>Analisis kebutuhan sumber daya</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Rekrutmen Strategis</p>
                      <p className="text-sm text-gray-600">
                        Proyeksi menunjukkan kebutuhan 3 perawat tambahan untuk Q3 2024. Mulai proses rekrutmen sekarang
                        untuk antisipasi peningkatan pasien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Optimalisasi Ruangan</p>
                      <p className="text-sm text-gray-600">
                        Dengan proyeksi utilisasi ruangan 82.4%, pertimbangkan untuk mengoptimalkan jadwal penggunaan
                        ruangan untuk menghindari bottleneck di jam-jam sibuk.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Investasi Peralatan</p>
                      <p className="text-sm text-gray-600">
                        Prioritaskan pembelian USG 4D pada Juli 2024 untuk mendukung peningkatan layanan kebidanan yang
                        diproyeksikan naik 15% pada Q3 2024.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
