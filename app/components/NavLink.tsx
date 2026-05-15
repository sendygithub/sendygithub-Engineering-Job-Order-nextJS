"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/88 backdrop-blur-xl border-b border-slate-200 shadow-sm sticky top-0 z-40">



{/* max-w-7xl           /* Maksimal lebar konten 
mx-auto             /* Center horizontal
px-6                /* Padding kiri-kanan 
py-4                /* Padding atas-bawah 
flex                /* Flexbox 
items-center        /* Vertikal center 
justify-between     /* Jarak logo & menu  */}



      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
          EJO Dashboard
        </Link>

        <div className="hidden sm:flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <Link href="/dashboard" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            Dashboard
          </Link>
          <Link href="/dashboard/input" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            Input Order
          </Link>
          <Link href="/dashboard/mesin" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            Mesin
          </Link>
          <Link href="/dashboard/part" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            Part
          </Link>
          <Link href="/dashboard/repairpart" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            Repair Part
          </Link>
          <Link href="/dashboard/inputuser" className="rounded-full px-4 py-2 hover:bg-slate-100 hover:text-slate-900 transition">
            User
          </Link>
        </div>
      </div>
    </nav>
  );
}
