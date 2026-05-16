"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/input", label: "Input Order" },
    { href: "/dashboard/mesin", label: "Mesin" },
    { href: "/dashboard/part", label: "Part" },
    { href: "/dashboard/repairpart", label: "Repair Part" },
    { href: "/dashboard/inputuser", label: "User" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-3">

        {/* LOGO (Kiri) */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <span className="font-bold text-xs">EJO</span>
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap">
            EJO Dashboard
          </span>
        </Link>

        {/* NAV LINKS (Rata Kanan Kiri di Tengah) */}
        <div className="hidden sm:flex flex-1 items-center justify-between text-sm max-w-2xl mx-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-200 text-center whitespace-nowrap ${isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* BUTTON SIGN IN (Kanan) */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/dashboard/loginuser"
            className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95 whitespace-nowrap"
          >
            Sign In
          </Link>
        </div>

      </div>
    </nav>
  );
}