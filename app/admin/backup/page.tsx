"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Database,
  Download,
  Calendar,
  Clock,
  HardDrive,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  ArrowUpFromLine,
} from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function AdminBackupPage() {
  const [isBackingUp, setIsBackingUp] = useState(false)
  const [isRestoring, setIsRestoring] = useState(false)

  const handleBackup = () => {
    setIsBackingUp(true)
    // Simulate backup process
    setTimeout(() => {
      setIsBackingUp(false)
    }, 3000)
  }

  const handleRestore = () => {
    setIsRestoring(true)
    // Simulate restore process
    setTimeout(() => {
      setIsRestoring(false)
    }, 5000)
  }

  const backupHistory = [
    {
      id: "bk-20240615-001",
      date: "15 Jun 2024",
      time: "23:00:00",
      size: "1.2 GB",
      status: "Success",
      type: "Automatic",
    },
    {
      id: "bk-20240614-001",
      date: "14 Jun 2024",
      time: "23:00:00",
      size: "1.1 GB",
      status: "Success",
      type: "Automatic",
    },
    {
      id: "bk-20240613-002",
      date: "13 Jun 2024",
      time: "15:30:12",
      size: "1.1 GB",
      status: "Success",
      type: "Manual",
    },
    {
      id: "bk-20240613-001",
      date: "13 Jun 2024",
      time: "23:00:00",
      size: "1.1 GB",
      status: "Failed",
      type: "Automatic",
    },
    {
      id: "bk-20240612-001",
      date: "12 Jun 2024",
      time: "23:00:00",
      size: "1.1 GB",
      status: "Success",
      type: "Automatic",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Success":
        return <Badge className="bg-green-100 text-green-800">Sukses</Badge>
      case "Failed":
        return <Badge variant="destructive">Gagal</Badge>
      case "In Progress":
        return <Badge className="bg-blue-100 text-blue-800">Proses</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Backup Data</h1>
          <p className="text-gray-600">Kelola backup dan restore data sistem</p>
        </div>

        <Tabs defaultValue="status" className="space-y-6">
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="history">Riwayat</TabsTrigger>
            <TabsTrigger value="settings">Pengaturan</TabsTrigger>
          </TabsList>

          {/* Status Tab */}
          <TabsContent value="status" className="space-y-6">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Backup Terakhir</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15 Jun 2024</div>
                  <p className="text-xs text-muted-foreground">23:00:00 WIB</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ukuran Database</CardTitle>
                  <Database className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.2 GB</div>
                  <p className="text-xs text-muted-foreground">+0.1 GB dari minggu lalu</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Backup Berikutnya</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">16 Jun 2024</div>
                  <p className="text-xs text-muted-foreground">23:00:00 WIB</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Backup Manual</CardTitle>
                  <CardDescription>Buat backup database secara manual</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <HardDrive className="h-5 w-5 text-blue-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Database saat ini</p>
                      <p className="text-xs text-muted-foreground">1.2 GB - 15 Jun 2024 23:00:00</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Tipe Backup</label>
                      <Select defaultValue="full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe backup" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full Backup</SelectItem>
                          <SelectItem value="incremental">Incremental</SelectItem>
                          <SelectItem value="differential">Differential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Kompresi</label>
                      <Select defaultValue="high">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih level kompresi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tanpa Kompresi</SelectItem>
                          <SelectItem value="low">Rendah</SelectItem>
                          <SelectItem value="medium">Sedang</SelectItem>
                          <SelectItem value="high">Tinggi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleBackup} disabled={isBackingUp} className="w-full">
                    {isBackingUp ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Backup Sedang Berjalan...
                      </>
                    ) : (
                      <>
                        <Database className="mr-2 h-4 w-4" />
                        Mulai Backup Sekarang
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Restore Data</CardTitle>
                  <CardDescription>Kembalikan data dari backup sebelumnya</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Perhatian</p>
                      <p className="text-xs text-muted-foreground">
                        Restore akan menimpa data saat ini. Pastikan untuk membuat backup terlebih dahulu.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Pilih Backup</label>
                    <Select defaultValue="latest">
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih backup" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">Backup Terbaru (15 Jun 2024 23:00)</SelectItem>
                        <SelectItem value="bk-20240614-001">14 Jun 2024 23:00</SelectItem>
                        <SelectItem value="bk-20240613-002">13 Jun 2024 15:30</SelectItem>
                        <SelectItem value="bk-20240612-001">12 Jun 2024 23:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Konfirmasi</label>
                    <Input type="text" placeholder="Ketik 'RESTORE' untuk konfirmasi" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleRestore}
                    disabled={isRestoring}
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-700 hover:bg-yellow-50"
                  >
                    {isRestoring ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Restore Sedang Berjalan...
                      </>
                    ) : (
                      <>
                        <ArrowUpFromLine className="mr-2 h-4 w-4" />
                        Restore Data
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Status Info */}
            <Card>
              <CardHeader>
                <CardTitle>Status Sistem</CardTitle>
                <CardDescription>Informasi status backup dan database</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Backup Otomatis</p>
                      <p className="text-xs text-muted-foreground">Aktif - Setiap hari pukul 23:00</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Penyimpanan</p>
                      <p className="text-xs text-muted-foreground">85.4 GB tersedia dari 100 GB</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Retensi Data</p>
                      <p className="text-xs text-muted-foreground">30 hari - 30 backup tersimpan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm font-medium">Enkripsi</p>
                      <p className="text-xs text-muted-foreground">AES-256 - Aktif</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Riwayat Backup</CardTitle>
                <CardDescription>Daftar backup yang telah dilakukan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">ID Backup</th>
                        <th className="py-3 px-4 text-left font-medium">Tanggal</th>
                        <th className="py-3 px-4 text-left font-medium">Waktu</th>
                        <th className="py-3 px-4 text-left font-medium">Ukuran</th>
                        <th className="py-3 px-4 text-left font-medium">Tipe</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {backupHistory.map((backup) => (
                        <tr key={backup.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{backup.id}</td>
                          <td className="py-3 px-4">{backup.date}</td>
                          <td className="py-3 px-4">{backup.time}</td>
                          <td className="py-3 px-4">{backup.size}</td>
                          <td className="py-3 px-4">{backup.type}</td>
                          <td className="py-3 px-4">{getStatusBadge(backup.status)}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm" disabled={backup.status === "Failed"}>
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" disabled={backup.status === "Failed"}>
                                <ArrowUpFromLine className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Backup</CardTitle>
                <CardDescription>Konfigurasi jadwal dan parameter backup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Jadwal Backup Otomatis</h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Frekuensi</label>
                      <Select defaultValue="daily">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih frekuensi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Setiap Jam</SelectItem>
                          <SelectItem value="daily">Harian</SelectItem>
                          <SelectItem value="weekly">Mingguan</SelectItem>
                          <SelectItem value="monthly">Bulanan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Waktu</label>
                      <Select defaultValue="23">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih waktu" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i.toString().padStart(2, "0")}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipe Backup</label>
                      <Select defaultValue="full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe backup" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full">Full Backup</SelectItem>
                          <SelectItem value="incremental">Incremental</SelectItem>
                          <SelectItem value="differential">Differential</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Penyimpanan & Retensi</h3>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Lokasi Penyimpanan</label>
                      <Select defaultValue="cloud">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih lokasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="local">Lokal</SelectItem>
                          <SelectItem value="cloud">Cloud Storage</SelectItem>
                          <SelectItem value="both">Keduanya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Periode Retensi</label>
                      <Select defaultValue="30">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih periode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 hari</SelectItem>
                          <SelectItem value="14">14 hari</SelectItem>
                          <SelectItem value="30">30 hari</SelectItem>
                          <SelectItem value="90">90 hari</SelectItem>
                          <SelectItem value="365">1 tahun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Kompresi</label>
                      <Select defaultValue="high">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih level kompresi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Tanpa Kompresi</SelectItem>
                          <SelectItem value="low">Rendah</SelectItem>
                          <SelectItem value="medium">Sedang</SelectItem>
                          <SelectItem value="high">Tinggi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notifikasi</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Notifikasi</label>
                      <Input type="email" placeholder="admin@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Kirim Notifikasi Untuk</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih event" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua Event</SelectItem>
                          <SelectItem value="success">Sukses Saja</SelectItem>
                          <SelectItem value="failure">Gagal Saja</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Batal</Button>
                <Button>Simpan Pengaturan</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
