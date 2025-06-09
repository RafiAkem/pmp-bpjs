"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Eye, Shield, User, CreditCard, FileText, Settings } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function AuditTrailPage() {
  const auditLogs = [
    {
      id: "1",
      timestamp: "2024-01-15 14:30:25",
      user: "admin@hospital.com",
      action: "LOGIN",
      resource: "System",
      details: "User logged in successfully",
      ipAddress: "192.168.1.100",
      status: "SUCCESS",
    },
    {
      id: "2",
      timestamp: "2024-01-15 14:25:12",
      user: "bendahara@hospital.com",
      action: "CREATE_TRANSACTION",
      resource: "BPJS Transaction",
      details: "Created BPJS transaction for patient ID: 12345",
      ipAddress: "192.168.1.101",
      status: "SUCCESS",
    },
    {
      id: "3",
      timestamp: "2024-01-15 14:20:08",
      user: "manajemen@hospital.com",
      action: "VIEW_REPORT",
      resource: "Financial Report",
      details: "Accessed monthly financial report",
      ipAddress: "192.168.1.102",
      status: "SUCCESS",
    },
    {
      id: "4",
      timestamp: "2024-01-15 14:15:45",
      user: "unknown@external.com",
      action: "LOGIN_ATTEMPT",
      resource: "System",
      details: "Failed login attempt - invalid credentials",
      ipAddress: "203.0.113.1",
      status: "FAILED",
    },
    {
      id: "5",
      timestamp: "2024-01-15 14:10:33",
      user: "bendahara@hospital.com",
      action: "UPDATE_TRANSACTION",
      resource: "Payment Record",
      details: "Updated payment status for transaction ID: TXN-001",
      ipAddress: "192.168.1.101",
      status: "SUCCESS",
    },
  ]

  const getActionIcon = (action: string) => {
    switch (action) {
      case "LOGIN":
      case "LOGIN_ATTEMPT":
        return <User className="h-4 w-4" />
      case "CREATE_TRANSACTION":
      case "UPDATE_TRANSACTION":
        return <CreditCard className="h-4 w-4" />
      case "VIEW_REPORT":
        return <FileText className="h-4 w-4" />
      default:
        return <Settings className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return <Badge className="bg-green-100 text-green-800">Berhasil</Badge>
      case "FAILED":
        return <Badge variant="destructive">Gagal</Badge>
      case "WARNING":
        return <Badge className="bg-yellow-100 text-yellow-800">Peringatan</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Audit Trail</h1>
          <p className="text-gray-600">Monitor dan lacak semua aktivitas sistem untuk transparansi</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Aktivitas</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">Hari ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Login Berhasil</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">24 jam terakhir</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transaksi</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Hari ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aktivitas Mencurigakan</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Perlu review</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Audit Log</CardTitle>
            <CardDescription>Cari dan filter aktivitas berdasarkan kriteria tertentu</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Cari user atau aktivitas..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Jenis Aktivitas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Aktivitas</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                  <SelectItem value="transaction">Transaksi</SelectItem>
                  <SelectItem value="report">Laporan</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Status</SelectItem>
                  <SelectItem value="success">Berhasil</SelectItem>
                  <SelectItem value="failed">Gagal</SelectItem>
                  <SelectItem value="warning">Peringatan</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex space-x-2">
                <Button>
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audit Log Table */}
        <Card>
          <CardHeader>
            <CardTitle>Log Aktivitas</CardTitle>
            <CardDescription>Riwayat lengkap aktivitas sistem</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Waktu</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Aktivitas</TableHead>
                  <TableHead>Resource</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getActionIcon(log.action)}
                        <span>{log.action.replace(/_/g, " ")}</span>
                      </div>
                    </TableCell>
                    <TableCell>{log.resource}</TableCell>
                    <TableCell className="font-mono text-sm">{log.ipAddress}</TableCell>
                    <TableCell>{getStatusBadge(log.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
