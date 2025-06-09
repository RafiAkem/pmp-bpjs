"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Save,
  Search,
  Plus,
  Receipt,
  CheckCircle,
  CreditCard,
  User,
  Calendar,
  FileText,
  Printer,
  Clock,
  AlertCircle,
  Eye,
} from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function TransaksiMandiriPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("baru")
  const [showReceipt, setShowReceipt] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [services, setServices] = useState([{ id: 1, name: "Konsultasi Dokter", price: 150000, qty: 1, total: 150000 }])

  const handleAddService = () => {
    const newServices = [...services]
    newServices.push({
      id: services.length + 1,
      name: "",
      price: 0,
      qty: 1,
      total: 0,
    })
    setServices(newServices)
  }

  const handleServiceChange = (index: number, field: string, value: any) => {
    const newServices = [...services]
    newServices[index] = {
      ...newServices[index],
      [field]: value,
      total:
        field === "price" || field === "qty"
          ? field === "price"
            ? value * newServices[index].qty
            : newServices[index].price * value
          : newServices[index].total,
    }
    setServices(newServices)
  }

  const handleRemoveService = (index: number) => {
    const newServices = [...services]
    newServices.splice(index, 1)
    setServices(newServices)
  }

  const calculateTotal = () => {
    return services.reduce((sum, service) => sum + service.total, 0)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowReceipt(true)
  }

  const recentTransactions = [
    {
      id: "TXN-M-001",
      patient: "Siti Nurhaliza",
      date: "2024-01-15",
      amount: 350000,
      status: "Lunas",
      paymentMethod: "Tunai",
    },
    {
      id: "TXN-M-002",
      patient: "Budi Santoso",
      date: "2024-01-15",
      amount: 275000,
      status: "Lunas",
      paymentMethod: "Debit",
    },
    {
      id: "TXN-M-003",
      patient: "Maya Sari",
      date: "2024-01-14",
      amount: 500000,
      status: "Lunas",
      paymentMethod: "Transfer",
    },
    {
      id: "TXN-M-004",
      patient: "Andi Wijaya",
      date: "2024-01-14",
      amount: 150000,
      status: "Lunas",
      paymentMethod: "Tunai",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="bendahara" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Pembayaran Mandiri</h1>
          <p className="text-gray-600">Catat dan kelola transaksi pembayaran non-BPJS</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="baru">Transaksi Baru</TabsTrigger>
            <TabsTrigger value="riwayat">Riwayat Transaksi</TabsTrigger>
          </TabsList>

          <TabsContent value="baru">
            {showReceipt ? (
              <Card>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Bukti Pembayaran</CardTitle>
                      <CardDescription>Transaksi berhasil dicatat</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => window.print()}>
                      <Printer className="mr-2 h-4 w-4" />
                      Cetak
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="py-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">Klinik Sehat Sejahtera</h3>
                        <p className="text-sm text-muted-foreground">Jl. Merdeka No. 123, Jakarta</p>
                        <p className="text-sm text-muted-foreground">Telp: (021) 1234-5678</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">No. Transaksi: TXN-M-005</p>
                        <p className="text-sm text-muted-foreground">
                          Tanggal: {new Date().toLocaleDateString("id-ID")}
                        </p>
                        <Badge className="bg-green-100 text-green-800">Lunas</Badge>
                      </div>
                    </div>

                    <div className="border-t border-b py-4">
                      <h4 className="font-medium mb-2">Data Pasien</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Nama Pasien</p>
                          <p>Ahmad Rizki</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">NIK</p>
                          <p>3201234567890001</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Dokter</p>
                          <p>Dr. Siti Nurhaliza, Sp.A</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Metode Pembayaran</p>
                          <p>{paymentMethod || "Tunai"}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Detail Layanan</h4>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Layanan</TableHead>
                            <TableHead className="text-right">Harga</TableHead>
                            <TableHead className="text-center">Qty</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {services.map((service) => (
                            <TableRow key={service.id}>
                              <TableCell>{service.name || "Konsultasi Dokter"}</TableCell>
                              <TableCell className="text-right">Rp {service.price.toLocaleString("id-ID")}</TableCell>
                              <TableCell className="text-center">{service.qty}</TableCell>
                              <TableCell className="text-right">Rp {service.total.toLocaleString("id-ID")}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="flex justify-end">
                      <div className="w-1/3">
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Subtotal</span>
                          <span>Rp {calculateTotal().toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="font-medium">Pajak (0%)</span>
                          <span>Rp 0</span>
                        </div>
                        <div className="flex justify-between py-2 border-t font-bold">
                          <span>Total</span>
                          <span>Rp {calculateTotal().toLocaleString("id-ID")}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 text-center text-sm text-muted-foreground">
                      <p>Terima kasih atas kunjungan Anda. Semoga lekas sembuh.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50">
                  <div className="flex w-full justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowReceipt(false)
                        setServices([{ id: 1, name: "Konsultasi Dokter", price: 150000, qty: 1, total: 150000 }])
                      }}
                    >
                      Transaksi Baru
                    </Button>
                    <Button onClick={() => setActiveTab("riwayat")}>Lihat Riwayat Transaksi</Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Form Input */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Form Pembayaran Mandiri</CardTitle>
                      <CardDescription>Masukkan detail transaksi pembayaran non-BPJS</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Patient Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Informasi Pasien</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="patient-id">NIK</Label>
                            <div className="flex space-x-2">
                              <Input id="patient-id" placeholder="Nomor Induk Kependudukan" />
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
                            <Label htmlFor="phone">No. Telepon</Label>
                            <Input id="phone" placeholder="Nomor telepon" />
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
                                <SelectItem value="konsultasi">Konsultasi</SelectItem>
                                <SelectItem value="pemeriksaan">Pemeriksaan</SelectItem>
                                <SelectItem value="tindakan">Tindakan Medis</SelectItem>
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
                            <Input id="diagnosis" placeholder="Diagnosis atau keluhan" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="service-date">Tanggal Layanan</Label>
                            <Input
                              id="service-date"
                              type="date"
                              defaultValue={new Date().toISOString().split("T")[0]}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">Detail Layanan & Biaya</h3>
                          <Button variant="outline" size="sm" onClick={handleAddService}>
                            <Plus className="h-4 w-4 mr-1" /> Tambah Item
                          </Button>
                        </div>

                        <div className="space-y-4">
                          {services.map((service, index) => (
                            <div key={service.id} className="grid grid-cols-12 gap-2 items-end">
                              <div className="col-span-5">
                                <Label htmlFor={`service-name-${index}`} className={index > 0 ? "sr-only" : ""}>
                                  Nama Layanan
                                </Label>
                                <Input
                                  id={`service-name-${index}`}
                                  value={service.name}
                                  onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                                  placeholder="Nama layanan"
                                />
                              </div>
                              <div className="col-span-3">
                                <Label htmlFor={`service-price-${index}`} className={index > 0 ? "sr-only" : ""}>
                                  Harga
                                </Label>
                                <Input
                                  id={`service-price-${index}`}
                                  type="number"
                                  value={service.price}
                                  onChange={(e) =>
                                    handleServiceChange(index, "price", Number.parseInt(e.target.value) || 0)
                                  }
                                  placeholder="Harga"
                                />
                              </div>
                              <div className="col-span-1">
                                <Label htmlFor={`service-qty-${index}`} className={index > 0 ? "sr-only" : ""}>
                                  Qty
                                </Label>
                                <Input
                                  id={`service-qty-${index}`}
                                  type="number"
                                  value={service.qty}
                                  onChange={(e) =>
                                    handleServiceChange(index, "qty", Number.parseInt(e.target.value) || 1)
                                  }
                                  min="1"
                                />
                              </div>
                              <div className="col-span-2">
                                <Label htmlFor={`service-total-${index}`} className={index > 0 ? "sr-only" : ""}>
                                  Total
                                </Label>
                                <Input
                                  id={`service-total-${index}`}
                                  value={service.total}
                                  readOnly
                                  className="bg-muted"
                                />
                              </div>
                              <div className="col-span-1">
                                {index > 0 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveService(index)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <AlertCircle className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-end pt-4 border-t">
                          <div className="w-1/3">
                            <div className="flex justify-between py-2">
                              <span className="font-medium">Total</span>
                              <span className="font-bold">Rp {calculateTotal().toLocaleString("id-ID")}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Informasi Pembayaran</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="payment-method">Metode Pembayaran</Label>
                            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih metode pembayaran" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Tunai">Tunai</SelectItem>
                                <SelectItem value="Debit">Kartu Debit</SelectItem>
                                <SelectItem value="Kredit">Kartu Kredit</SelectItem>
                                <SelectItem value="Transfer">Transfer Bank</SelectItem>
                                <SelectItem value="QRIS">QRIS</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="payment-status">Status Pembayaran</Label>
                            <Select defaultValue="lunas">
                              <SelectTrigger>
                                <SelectValue placeholder="Pilih status pembayaran" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="lunas">Lunas</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Catatan</Label>
                          <Textarea id="notes" placeholder="Catatan tambahan..." />
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
                              Simpan & Cetak
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
                      <CardTitle>Ringkasan Pembayaran</CardTitle>
                      <CardDescription>Informasi transaksi pembayaran mandiri</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">Total Transaksi</p>
                            <p className="text-xs text-muted-foreground">Hari ini</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">12</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="text-sm font-medium">Pendapatan</p>
                            <p className="text-xs text-muted-foreground">Hari ini</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Rp 3.2M</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <User className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="text-sm font-medium">Pasien Baru</p>
                            <p className="text-xs text-muted-foreground">Hari ini</p>
                          </div>
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">5</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Transaksi Terbaru</CardTitle>
                      <CardDescription>5 transaksi terakhir</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {recentTransactions.slice(0, 3).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Receipt className="h-4 w-4 text-blue-600" />
                            <div>
                              <p className="text-sm font-medium">{transaction.id}</p>
                              <p className="text-xs text-muted-foreground">{transaction.patient}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">Rp {transaction.amount.toLocaleString("id-ID")}</p>
                            <Badge className="bg-green-100 text-green-800">{transaction.status}</Badge>
                          </div>
                        </div>
                      ))}
                      <Button variant="ghost" className="w-full text-sm" onClick={() => setActiveTab("riwayat")}>
                        Lihat Semua Transaksi
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="riwayat">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Riwayat Transaksi Pembayaran Mandiri</CardTitle>
                    <CardDescription>Daftar seluruh transaksi pembayaran non-BPJS</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Cari transaksi..." className="pl-10 w-full sm:w-[250px]" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No. Transaksi</TableHead>
                      <TableHead>Pasien</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Metode Pembayaran</TableHead>
                      <TableHead className="text-right">Jumlah</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.patient}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.paymentMethod}</TableCell>
                        <TableCell className="text-right">Rp {transaction.amount.toLocaleString("id-ID")}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">{transaction.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Printer className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="border-t bg-muted/50 flex justify-between">
                <div className="text-sm text-muted-foreground">Menampilkan 1-4 dari 4 transaksi</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Sebelumnya
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Selanjutnya
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
