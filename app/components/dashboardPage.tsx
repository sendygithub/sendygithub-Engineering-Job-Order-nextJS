"use client";

import { useState } from "react";
import {
  Menu,
  Bell,
  User,
  Search,
  Plus,
  Calendar,
  Clock,
  FileText,
  CircleCheck,
  CircleX,
  CircleAlert,
  Filter,
  Download,
  TrendingUp,
  Wrench,
  ClipboardList,
  Settings,
  Factory,
  Package,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { DialogTrigger } from "./ui/dialog";


// Mock data for job orders
const jobOrders = [
  {
    id: "JO-2026-001",
    title: "Maintenance Conveyor Belt Line A",
    department: "Production",
    priority: "High",
    status: "In Progress",
    assignee: "Ahmad Hidayat",
    dueDate: "2026-01-05",
    progress: 65,
  },
  {
    id: "JO-2026-002",
    title: "Repair Hydraulic Press Machine",
    department: "Engineering",
    priority: "Critical",
    status: "Pending",
    assignee: "Budi Santoso",
    dueDate: "2026-01-03",
    progress: 20,
  },
  {
    id: "JO-2026-003",
    title: "Installation New Cooling System",
    department: "Facility",
    priority: "Medium",
    status: "In Progress",
    assignee: "Cahya Wijaya",
    dueDate: "2026-01-08",
    progress: 45,
  },
  {
    id: "JO-2026-004",
    title: "Electrical Panel Upgrade",
    department: "Electrical",
    priority: "High",
    status: "Completed",
    assignee: "Dedi Kurniawan",
    dueDate: "2025-12-30",
    progress: 100,
  },
  {
    id: "JO-2026-005",
    title: "Safety Inspection - Floor 3",
    department: "Safety",
    priority: "Medium",
    status: "In Progress",
    assignee: "Eko Prasetyo",
    dueDate: "2026-01-06",
    progress: 75,
  },
];

// Chart data
const monthlyData = [
  { month: "Jul", completed: 24, pending: 8 },
  { month: "Aug", completed: 32, pending: 6 },
  { month: "Sep", completed: 28, pending: 10 },
  { month: "Oct", completed: 35, pending: 5 },
  { month: "Nov", completed: 30, pending: 7 },
  { month: "Dec", completed: 38, pending: 4 },
];

const statusData = [
  { name: "Completed", value: 42, color: "#10b981" },
  { name: "In Progress", value: 28, color: "#3b82f6" },
  { name: "Pending", value: 18, color: "#f59e0b" },
  { name: "On Hold", value: 12, color: "#ef4444" },
];

export function EngineeringDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400";
      case "In Progress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Pending":
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
      case "On Hold":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-500 text-white";
      case "High":
        return "bg-sky-600 text-white";
      case "Medium":
        return "bg-blue-500 text-white";
      case "Low":
        return "bg-slate-500 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_30%),#effbff] text-slate-900">
      {/* Sidebar */}


      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-20"
          }`}
      >
        {/* Header */}


        {/* Dashboard Content */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <h3 className="mt-2">142</h3>
                  <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="size-3" />
                    +12% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <ClipboardList className="size-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Progress</p>
                  <h3 className="mt-2">28</h3>
                  <p className="text-xs text-blue-600 mt-1">Active jobs</p>
                </div>
                <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                  <Clock className="size-6 text-sky-600" />
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <h3 className="mt-2">96</h3>
                  <p className="text-xs text-green-600 mt-1">67.6% completion</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <CircleCheck className="size-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <h3 className="mt-2">18</h3>
                  <p className="text-xs text-yellow-600 mt-1">Need attention</p>
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                  <CircleAlert className="size-6 text-slate-600" />
                </div>
              </div>
            </Card>
          </div>



          {/* ********************************************************************Job Orders Table************************************************************************** */}
          <Card className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h3>Recent Job Orders</h3>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 md:flex-initial">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-full md:w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="size-4" />
                </Button>

                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Plus className="size-4 mr-2" />
                  New Order
                </Button>

              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-left text-sm text-muted-foreground">
                    <th className="pb-3 font-medium">Order ID</th>
                    <th className="pb-3 font-medium">Title</th>
                    <th className="pb-3 font-medium">Department</th>
                    <th className="pb-3 font-medium">Priority</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Assignee</th>
                    <th className="pb-3 font-medium">Due Date</th>
                    <th className="pb-3 font-medium">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {jobOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0 hover:bg-slate-100 transition-colors">
                      <td className="py-4 font-mono text-sm">{order.id}</td>
                      <td className="py-4">
                        <div className="font-medium">{order.title}</div>
                      </td>
                      <td className="py-4 text-sm text-muted-foreground">
                        {order.department}
                      </td>
                      <td className="py-4">
                        <Badge className={getPriorityColor(order.priority)}>
                          {order.priority}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <Badge variant="secondary" className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="py-4 text-sm">{order.assignee}</td>
                      <td className="py-4 text-sm">{order.dueDate}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-10">
                            {order.progress}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {jobOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 border border-slate-200 rounded-3xl space-y-3 bg-white transition hover:bg-slate-100"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-sm text-muted-foreground">
                        {order.id}
                      </div>
                      <div className="font-medium mt-1">{order.title}</div>
                    </div>
                    <Badge className={getPriorityColor(order.priority)}>
                      {order.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {order.department}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Assignee:</span>
                      <span>{order.assignee}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Due Date:</span>
                      <span>{order.dueDate}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span>{order.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${order.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}


export default EngineeringDashboard;