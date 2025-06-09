"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  Send,
  RefreshCw,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  Download,
  FileText,
  Upload,
  Filter,
  Calendar,
} from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function KlaimBPJSPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("monitoring")
  const [selectedClaim, setSelectedClaim] = useState<any>(null)

  const handleSubmitClaim = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Klaim BPJS berhasil dikirim untuk pemrosesan!")
  }

  const handleRefreshStatus = async () => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Status klaim berhasil diperbarui!")
  }

  const claimData = [
    {
      id: "CLAIM-2024-001",
      transactionId: "TXN-2024-001",
      patient: "Ahmad Rizki Pratama",
      bpjsNumber: "0001234567890",
      serviceType: "Rawat Jalan",
      diagnosis: "Hipertensi (I10)",
      doctor: "Dr. Ahmad Rizki, Sp.PD",
      serviceDate: "2024-01-15",
      claimAmount: 250000,
      status: "approved",
      submissionDate: "2024-01-15 14:30",
      responseDate: "2024-01-16 09:15",
      inaCbgCode: "I10",
      notes: "Klaim disetujui sepenuhnya",
    },
    {
      id: "CLAIM-2024-002",
      transactionId: "TXN-2024-002",
      patient: "Siti Nurhaliza Dewi",
      bpjsNumber: "0001234567891",
      serviceType: "Rawat Jalan",
      diagnosis: "ISPA (J06)",
      doctor: "Dr. Siti Nurhaliza, Sp.A",
      serviceDate: "2024-01-15",
      claimAmount: 150000,
      status: "processing",
      submissionDate: "2024-01-15 15:45",
      responseDate: null,
      inaCbgCode: "J06",
      notes: "Sedang dalam proses verifikasi",
    },
    {
      id: "CLAIM-2024-003",
      transactionId: "TXN-2024-003",
      patient: "Maya Sari Indah",
      bpjsNumber: "0001234567893",
      serviceType: "Rawat Inap",
      diagnosis: "Persalinan Normal (O80)",
      doctor: "Dr. Maya Sari, Sp.OG",
      serviceDate: "2024-01-14",
      claimAmount: 1500000,
      status: "rejected",
      submissionDate: "2024-01-14 16:20",
      responseDate: "2024-01-15 11:30",
      inaCbgCode: "O80",
      notes: "Dokumen pendukung tidak lengkap",
    },
    {
      id: "CLAIM-2024-004",
      transactionId: "TXN-2024-004",
      patient: "Budi Santoso Wijaya",
      bpjsNumber: "0001234567892",
      serviceType: "IGD",
      diagnosis: "Fraktur Radius (S52)",
      doctor: "Dr. Budi Santoso, Sp.B",
      serviceDate: "2024-01-13",
      claimAmount: 800000,
      status: "submitted",
      submissionDate: "2024-01-13 20:15",
      responseDate: null,
      inaCbgCode: "S52",
      notes: "Menunggu verifikasi BPJS",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Disetujui
          </Badge>
        )
      case "processing":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Proses
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Ditolak
          </Badge>
        )
      case "submitted":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Upload className="w-3 h-3 mr-1" />
            Dikirim
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getStatusStats = () => {
    const approved = claimData.filter((claim) => claim.status === "approved").length
    const processing = claimData.filter((claim) => claim.status === "processing").length
    const rejected = claimData.filter((claim) => claim.status === "rejected").length
    const submitted = claimData.filter((claim) => claim.status === "submitted").length

    return { approved, processing, rejected, submitted }
  }

  const stats = getStatusStats()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="bendahara" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Klaim BPJS</h1>
          <p className="text-gray-600">Monitor dan kelola klaim BPJS secara real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disetujui</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
              <p className="text-xs text-muted-foreground">Klaim berhasil</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dalam Proses</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.processing}</div>
              <p className="text-xs text-muted-foreground">Sedang diverifikasi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ditolak</CardTitle>
              <XCircle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <p className="text-xs text-muted-foreground">Perlu perbaikan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dikirim</CardTitle>
              <Upload className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.submitted}</div>
              <p className="text-xs text-muted-foreground">Menunggu respons</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="monitoring">Monitoring Klaim</TabsTrigger>
            <TabsTrigger value="submit">Submit Klaim Baru</TabsTrigger>
            <TabsTrigger value="reports">Laporan Klaim</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Monitoring Klaim BPJS</CardTitle>
                    <CardDescription>Pantau status klaim BPJS secara real-time</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Cari klaim..." className="pl-10 w-full sm:w-[250px]" />
                    </div>
                    <Button variant="outline" onClick={handleRefreshStatus}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No. Klaim</TableHead>
                      <TableHead>Pasien</TableHead>
                      <TableHead>Layanan</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {claimData.map((claim) => (
                      <TableRow key={claim.id}>
                        <TableCell className="font-medium">{claim.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{claim.patient}</p>
                            <p className="text-sm text-muted-foreground">{claim.bpjsNumber}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{claim.serviceType}</p>
                            <p className="text-sm text-muted-foreground">{claim.diagnosis}</p>
                          </div>
                        </TableCell>
                        <TableCell>{claim.serviceDate}</TableCell>
                        <TableCell className="text-right">Rp {claim.claimAmount.toLocaleString("id-ID")}</TableCell>
                        <TableCell>{getStatusBadge(claim.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setSelectedClaim(claim)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Detail Modal */}
            {selectedClaim && (
              <Card className="mt-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Detail Klaim {selectedClaim.id}</CardTitle>
                    <Button variant="outline" onClick={() => setSelectedClaim(null)}>
                      Tutup
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Informasi Pasien</h4>
                      <div className="space-y-2">
                        <div>
                          <Label className="text-sm text-muted-foreground">Nama Pasien</Label>
                          <p className="font-medium">{selectedClaim.patient}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">No. BPJS</Label>
                          <p className="font-medium">{selectedClaim.bpjsNumber}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">Dokter</Label>
                          <p className="font-medium">{selectedClaim.doctor}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Informasi Klaim</h4>
                      <div className="space-y-2">
                        <div>
                          <Label className="text-sm text-muted-foreground">Jenis Layanan</Label>
                          <p className="font-medium">{selectedClaim.serviceType}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">Diagnosis</Label>
                          <p className="font-medium">{selectedClaim.diagnosis}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">Kode INA-CBG</Label>
                          <p className="font-medium">{selectedClaim.inaCbgCode}</p>
                        </div>
                        <div>
                          <Label className="text-sm text-muted-foreground">Jumlah Klaim</Label>
                          <p className="font-medium">Rp {selectedClaim.claimAmount.toLocaleString("id-ID")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-semibold">Status & Timeline</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div>
                            <p className="font-medium">Klaim Dikirim</p>
                            <p className="text-sm text-muted-foreground">{selectedClaim.submissionDate}</p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        {selectedClaim.responseDate && (
                          <div
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              selectedClaim.status === "approved" ? "bg-green-50" : "bg-red-50"
                            }`}
                          >
                            <div>
                              <p className="font-medium">
                                {selectedClaim.status === "approved" ? "Klaim Disetujui" : "Klaim Ditolak"}
                              </p>
                              <p className="text-sm text-muted-foreground">{selectedClaim.responseDate}</p>
                            </div>
                            {selectedClaim.status === "approved" ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                        )}
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Catatan</Label>
                        <p className="font-medium">{selectedClaim.notes}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="submit">
            <Card>
              <CardHeader>
                <CardTitle>Submit Klaim BPJS Baru</CardTitle>
                <CardDescription>Kirim klaim BPJS untuk transaksi yang belum diklaim</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pilih Transaksi</h3>
                  <div className="space-y-2">
                    <Label htmlFor="transaction">No. Transaksi</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih transaksi BPJS yang belum diklaim" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TXN-2024-005">TXN-2024-005 - Andi Wijaya (Konsultasi Jantung)</SelectItem>
                        <SelectItem value="TXN-2024-006">TXN-2024-006 - Lisa Permata (Rawat Jalan)</SelectItem>
                        <SelectItem value="TXN-2024-007">TXN-2024-007 - Rudi Hartono (IGD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Klaim</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ina-cbg">Kode INA-CBG</Label>
                      <Input id="ina-cbg" placeholder="Masukkan kode INA-CBG" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tariff">Tarif INA-CBG</Label>
                      <Input id="tariff" placeholder="Rp 0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="claim-type">Jenis Klaim</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis klaim" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rawat-jalan">Rawat Jalan</SelectItem>
                          <SelectItem value="rawat-inap">Rawat Inap</SelectItem>
                          <SelectItem value="igd">IGD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Prioritas</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih prioritas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Dokumen Pendukung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sep">File SEP</Label>
                      <Input id="sep" type="file" accept=".pdf,.jpg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume Medis</Label>
                      <Input id="resume" type="file" accept=".pdf,.jpg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lab-result">Hasil Lab</Label>
                      <Input id="lab-result" type="file" accept=".pdf,.jpg,.png" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="other-docs">Dokumen Lain</Label>
                      <Input id="other-docs" type="file" accept=".pdf,.jpg,.png" multiple />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="claim-notes">Catatan Klaim</Label>
                  <Textarea id="claim-notes" placeholder="Catatan tambahan untuk klaim..." />
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleSubmitClaim} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Kirim Klaim
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Simpan Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Laporan Klaim BPJS</CardTitle>
                    <CardDescription>Analisis dan laporan klaim BPJS</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Periode
                    </Button>
                    <Button>
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">94.2%</div>
                    <p className="text-sm text-muted-foreground">Tingkat Persetujuan</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">Rp 2.8M</div>
                    <p className="text-sm text-muted-foreground">Total Klaim Bulan Ini</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">3.2 hari</div>
                    <p className="text-sm text-muted-foreground">Rata-rata Proses</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Ringkasan Klaim per Jenis Layanan</h4>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Jenis Layanan</TableHead>
                        <TableHead className="text-center">Total Klaim</TableHead>
                        <TableHead className="text-center">Disetujui</TableHead>
                        <TableHead className="text-center">Ditolak</TableHead>
                        <TableHead className="text-right">Nilai Klaim</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Rawat Jalan</TableCell>
                        <TableCell className="text-center">45</TableCell>
                        <TableCell className="text-center">42</TableCell>
                        <TableCell className="text-center">3</TableCell>
                        <TableCell className="text-right">Rp 1.2M</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Rawat Inap</TableCell>
                        <TableCell className="text-center">12</TableCell>
                        <TableCell className="text-center">11</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-right">Rp 1.4M</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">IGD</TableCell>
                        <TableCell className="text-center">8</TableCell>
                        <TableCell className="text-center">7</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-right">Rp 200K</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
