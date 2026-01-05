"use client";

import {
  Menu,
  Bell,
  User, 
  Calendar,
  Clock,
  FileText,
  CircleCheck,
  CircleAlert,
  TrendingUp,
  Wrench,
  ClipboardList,
  Settings,
  Factory,
  Package,
} from "lucide-react";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ReactNode, useState } from "react";

type EngineeringDashboardProps = {
  children: ReactNode;
};

export function EngineeringDashboard({ children }: EngineeringDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-slate-800 text-white transition-all duration-300 z-20 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
              <Factory className="size-6" />
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <div className="font-bold text-sm">PT. Gajah Tunggal</div>
                <div className="text-xs text-slate-400">Engineering</div>
              </div>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700">
    <ClipboardList className="size-5 shrink-0" />
    {sidebarOpen && <span>Job Orders</span>}
  </div>

  <Link
    href="/dashboard/input"
    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700 transition-colors"
  >
    <Wrench className="size-5 shrink-0" />
    {sidebarOpen && <Link href="/dashboard/RepairOrder">Repair Order</Link>}
  </Link>

  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700">
    <Package className="size-5 shrink-0" />
    {sidebarOpen && <Link href="/dashboard/mesin">Machine</Link>}
  </div>
<div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700">
    <Settings className="size-5 shrink-0" />
    {sidebarOpen && <Link href="/dashboard/repairpart">repairpart</Link>}
  </div>
  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700">
    <Calendar className="size-5 shrink-0" />
    {sidebarOpen && <Link href="/dashboard/part">Part</Link>}
  </div>

  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-700">
    <FileText className="size-5 shrink-0" />
    {sidebarOpen && <Link href="/dashboard/inputuser">User</Link>}
  </div>

  
</nav>

      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
          <div className="px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="size-5" />
              </Button>
              <div>
                <h1 className="text-lg md:text-xl">Engineering Job Order</h1>
                <p className="text-xs md:text-sm text-muted-foreground">
                  PT. Gajah Tunggal. Tbk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="size-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="size-5" />
              </Button>
            </div>
          </div>
        </header>

     

            {children}
          
        
      </div>
    </div>
  );
}


export default EngineeringDashboard;