"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, FileText, Plus, DollarSign, Receipt, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Sidebar } from "@/components/sidebar"

export default function BendaharaDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="bendahara" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Bendahara</h1>
          <p className="text-gray-600">Kelola transaksi dan keuangan harian</p>
        </div>

        {/* Financial Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendapatan Hari Ini</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 45.2M</div>
              <p className="text-xs text-muted-foreground">+8% dari kemarin</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Klaim BPJS</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 32.1M</div>
              <p className="text-xs text-muted-foreground">156 transaksi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pembayaran Mandiri</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 13.1M</div>
              <p className="text-xs text-muted-foreground">89 transaksi</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transaksi Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Perlu verifikasi</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Transaksi Cepat</CardTitle>
              <CardDescription>Catat transaksi baru</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/bendahara/transaksi/bpjs">
                <Button className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Transaksi BPJS
                </Button>
              </Link>
              <Link href="/bendahara/transaksi/mandiri">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Pembayaran Mandiri
                </Button>
              </Link>
              <Link href="/bendahara/klaim">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Proses Klaim BPJS
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Klaim BPJS</CardTitle>
              <CardDescription>Monitoring klaim otomatis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium">Berhasil</p>
                    <p className="text-xs text-muted-foreground">142 klaim</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Selesai</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium">Proses</p>
                    <p className="text-xs text-muted-foreground">8 klaim</p>
                  </div>
                </div>
                <Badge variant="secondary">Pending</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Transaksi Terbaru</CardTitle>
            <CardDescription>Daftar transaksi hari ini</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Receipt className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">BPJS - Rawat Jalan</p>
                    <p className="text-sm text-muted-foreground">Pasien: Ahmad Rizki</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Rp 250.000</p>
                  <Badge className="bg-green-100 text-green-800">Berhasil</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Mandiri - Konsultasi</p>
                    <p className="text-sm text-muted-foreground">Pasien: Siti Nurhaliza</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Rp 150.000</p>
                  <Badge className="bg-green-100 text-green-800">Berhasil</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
