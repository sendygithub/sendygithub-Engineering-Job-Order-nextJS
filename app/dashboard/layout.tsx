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
import { usePathname } from "next/navigation";

type EngineeringDashboardProps = {
  children: ReactNode;
};

export function EngineeringDashboard({ children }: EngineeringDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Job Orders", icon: ClipboardList },
    { href: "/dashboard/input", label: "Maintenance", icon: Wrench },
    { href: "/dashboard/RepairOrder", label: "Repair Order", icon: Package },
    { href: "/dashboard/mesin", label: "Machine", icon: Calendar },
    { href: "/dashboard/repairpart", label: "Repair Part", icon: Settings },
    { href: "/dashboard/part", label: "Part", icon: FileText },
    { href: "/dashboard/inputuser", label: "User", icon: User },
  ];

  return (
    <div className="h-screen w-screen bg-[#f8fafc] text-slate-900 flex overflow-hidden font-sans selection:bg-blue-100">
      {/* Sidebar */}


      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8fafc] relative">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10 flex items-center shrink-0">
          <div className="w-full px-4 md:px-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">


            </div>

            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-3 py-1.5 gap-2 mr-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-600 uppercase">System Online</span>
              </div>
              <Button variant="ghost" size="icon" className="relative text-slate-600 hover:bg-slate-100 rounded-xl h-10 w-10">
                <Bell className="size-5" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
              </Button>
              <div className="h-8 w-px bg-slate-200 mx-1"></div>
              <Button variant="ghost" size="icon" className="text-slate-600 hover:bg-slate-100 rounded-xl h-10 w-10">
                <Settings className="size-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Scrollable Content Wrapper */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 custom-scrollbar">
          {children}
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
}

export default EngineeringDashboard;