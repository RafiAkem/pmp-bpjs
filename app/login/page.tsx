"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Activity } from "lucide-react"

export default function LoginPage() {
  const [role, setRole] = useState("")

  const handleLogin = () => {
    // In a real app, implement proper authentication
    if (role === "admin") {
      window.location.href = "/admin/dashboard"
    } else if (role === "bendahara") {
      window.location.href = "/bendahara/dashboard"
    } else if (role === "manajemen") {
      window.location.href = "/manajemen/dashboard"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Activity className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Sistem Keuangan Kesehatan</CardTitle>
          <CardDescription>Masuk ke sistem manajemen keuangan BPJS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Masukkan username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Masukkan password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="bendahara">Bendahara</SelectItem>
                <SelectItem value="manajemen">Manajemen</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleLogin} className="w-full" disabled={!role}>
            <Shield className="mr-2 h-4 w-4" />
            Masuk Sistem
          </Button>
          <div className="text-center text-sm text-muted-foreground">
            Demo: Pilih role untuk mengakses dashboard yang sesuai
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
