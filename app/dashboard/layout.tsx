"use client";

import {
  Menu,
  Bell,
  User,
  Calendar,
  FileText,
  Wrench,
  ClipboardList,
  Settings,
  Factory,
  Package,
} from "lucide-react";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { ReactNode, useState } from "react";

type EngineeringDashboardProps = {
  children: ReactNode;
};

export function EngineeringDashboard({ children }: EngineeringDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);



  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_30%),#effbff] text-slate-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white text-slate-900 border-r border-slate-200 transition-all duration-300 z-20 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Factory className="size-6" />
            </div>
            {sidebarOpen && (
              <div className="overflow-hidden">
                <div className="font-semibold text-sm text-slate-900">PT. Gajah Tunggal</div>
                <div className="text-xs text-slate-500">Engineering</div>
              </div>
            )}
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-2xl bg-blue-50 px-3 py-2.5 text-slate-900 transition hover:bg-sky-100">
            <ClipboardList className="size-5 shrink-0 text-sky-600" />
            {sidebarOpen && <span>Job Orders</span>}
          </Link>

          <Link href="/dashboard/input" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <Wrench className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>Maintenance</span>}
          </Link>

          <Link href="/dashboard/RepairOrder" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <Package className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>Repair Order</span>}
          </Link>

          <Link href="/dashboard/mesin" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <Calendar className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>Machine</span>}
          </Link>

          <Link href="/dashboard/repairpart" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <Settings className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>Repair Part</span>}
          </Link>

          <Link href="/dashboard/part" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <FileText className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>Part</span>}
          </Link>

          <Link href="/dashboard/inputuser" className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-100">
            <User className="size-5 shrink-0 text-slate-500" />
            {sidebarOpen && <span>User</span>}
          </Link>
        </nav>

      </aside>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
          <div className="px-4 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="size-5 text-slate-700" />
              </Button>
              <div>
                <h1 className="text-lg md:text-xl font-semibold text-slate-900">Engineering Job Order</h1>
                <p className="text-xs md:text-sm text-slate-500">PT. Gajah Tunggal. Tbk</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative text-slate-700">
                <Bell className="size-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-700">
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