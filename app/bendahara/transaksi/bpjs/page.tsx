"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Save, Search, Plus, Receipt, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function TransaksiBPJSPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    alert("Transaksi BPJS berhasil dicatat dan dikirim untuk klaim otomatis!")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="bendahara" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Transaksi BPJS</h1>
          <p className="text-gray-600">Catat transaksi BPJS dan proses klaim otomatis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Input */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Form Transaksi BPJS</CardTitle>
                <CardDescription>Masukkan detail transaksi untuk pemrosesan klaim</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Patient Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Pasien</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bpjs-number">Nomor BPJS</Label>
                      <div className="flex space-x-2">
                        <Input id="bpjs-number" placeholder="0001234567890" />
                        <Button variant="outline" size="icon">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-name">Nama Pasien</Label>
                      <Input id="patient-name" placeholder="Nama lengkap pasien" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="patient-id">NIK</Label>
                      <Input id="patient-id" placeholder="Nomor Induk Kependudukan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birth-date">Tanggal Lahir</Label>
                      <Input id="birth-date" type="date" />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Layanan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service-type">Jenis Layanan</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rawat-jalan">Rawat Jalan</SelectItem>
                          <SelectItem value="rawat-inap">Rawat Inap</SelectItem>
                          <SelectItem value="igd">IGD</SelectItem>
                          <SelectItem value="operasi">Operasi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor">Dokter</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih dokter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dr-ahmad">Dr. Ahmad Rizki</SelectItem>
                          <SelectItem value="dr-siti">Dr. Siti Nurhaliza</SelectItem>
                          <SelectItem value="dr-budi">Dr. Budi Santoso</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis">Diagnosis</Label>
                      <Input id="diagnosis" placeholder="Kode ICD-10 atau diagnosis" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service-date">Tanggal Layanan</Label>
                      <Input id="service-date" type="date" />
                    </div>
                  </div>
                </div>

                {/* Financial Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Informasi Keuangan</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tariff">Tarif INA-CBG</Label>
                      <Input id="tariff" placeholder="Rp 0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional-cost">Biaya Tambahan</Label>
                      <Input id="additional-cost" placeholder="Rp 0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Catatan</Label>
                    <Textarea id="notes" placeholder="Catatan tambahan untuk klaim..." />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Simpan & Klaim
                      </>
                    )}
                  </Button>
                  <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Simpan Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Status Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Status Klaim BPJS</CardTitle>
                <CardDescription>Monitor status klaim real-time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Berhasil</p>
                      <p className="text-xs text-muted-foreground">142 klaim</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">94.2%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <div>
                      <p className="text-sm font-medium">Proses</p>
                      <p className="text-xs text-muted-foreground">8 klaim</p>
                    </div>
                  </div>
                  <Badge variant="secondary">5.3%</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">Ditolak</p>
                      <p className="text-xs text-muted-foreground">1 klaim</p>
                    </div>
                  </div>
                  <Badge variant="destructive">0.7%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Transaksi Terbaru</CardTitle>
                <CardDescription>5 transaksi terakhir</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Receipt className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">TXN-001</p>
                      <p className="text-xs text-muted-foreground">Ahmad Rizki</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Berhasil</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Receipt className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">TXN-002</p>
                      <p className="text-xs text-muted-foreground">Siti Nurhaliza</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Proses</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
