"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  CreditCard,
  FileText,
  Settings,
  Shield,
  BarChart3,
  Activity,
  LogOut,
  Database,
  Receipt,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  role: "admin" | "bendahara" | "manajemen"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const adminMenuItems = [
    { icon: Home, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Users, label: "Kelola Pengguna", href: "/admin/users" },
    { icon: Shield, label: "Audit Trail", href: "/admin/audit" },
    { icon: Database, label: "Backup Data", href: "/admin/backup" },
    { icon: Settings, label: "Pengaturan", href: "/admin/settings" },
  ]

  const bendaharaMenuItems = [
    { icon: Home, label: "Dashboard", href: "/bendahara/dashboard" },
    { icon: CreditCard, label: "Transaksi BPJS", href: "/bendahara/transaksi/bpjs" },
    { icon: Receipt, label: "Pembayaran Mandiri", href: "/bendahara/transaksi/mandiri" },
    { icon: FileText, label: "Klaim BPJS", href: "/bendahara/klaim" },
    { icon: BarChart3, label: "Laporan Harian", href: "/bendahara/reports" },
  ]

  const manajemenMenuItems = [
    { icon: Home, label: "Dashboard", href: "/manajemen/dashboard" },
    { icon: TrendingUp, label: "Analisis Keuangan", href: "/manajemen/analytics" },
    { icon: FileText, label: "Laporan", href: "/manajemen/reports" },
    { icon: BarChart3, label: "Tren & Forecast", href: "/manajemen/trends" },
    { icon: Activity, label: "KPI Monitoring", href: "/manajemen/kpi" },
  ]

  const getMenuItems = () => {
    switch (role) {
      case "admin":
        return adminMenuItems
      case "bendahara":
        return bendaharaMenuItems
      case "manajemen":
        return manajemenMenuItems
      default:
        return []
    }
  }

  const getRoleTitle = () => {
    switch (role) {
      case "admin":
        return "Administrator"
      case "bendahara":
        return "Bendahara"
      case "manajemen":
        return "Manajemen"
      default:
        return ""
    }
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">HealthFinance</h2>
            <p className="text-sm text-gray-600">{getRoleTitle()}</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {getMenuItems().map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn("w-full justify-start", isActive && "bg-blue-600 text-white hover:bg-blue-700")}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Link href="/login">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="mr-3 h-4 w-4" />
            Keluar
          </Button>
        </Link>
      </div>
    </div>
  )
}
