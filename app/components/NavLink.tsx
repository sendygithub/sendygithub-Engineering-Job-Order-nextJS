"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    //  w-full               /* Lebar penuh layar */
    //     bg-white             /* Warna latar putih */
    //     border-b             /* Garis bawah navbar */
    //     border-gray-200      /* Warna border abu-abu */
    //     shadow-sm            /* Bayangan tipis */
    //   "
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">



{/* max-w-7xl           /* Maksimal lebar konten 
mx-auto             /* Center horizontal
px-6                /* Padding kiri-kanan 
py-4                /* Padding atas-bawah 
flex                /* Flexbox 
items-center        /* Vertikal center 
justify-between     /* Jarak logo & menu  */}



      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="
            text-xl            /* Ukuran teks besar */
            font-bold          /* Tebal */
            text-gray-800      /* Warna teks */
          "
        >
          TempeStore
        </Link>

        {/* Menu Navigasi */}
        <div
          className="
            flex               /* Menu sejajar horizontal */
            gap-6              /* Jarak antar menu */
          "
        >
          <Link
            href="/dashboard"
            className="
              text-gray-600     /* Warna teks default */
              hover:text-gray-900 /* Warna saat hover */
              transition-colors /* Animasi perubahan warna */
            "
          >
        dashboard
          </Link>

          <Link
            href="/input"
            className="
              text-gray-600     /* Warna teks default */
              hover:text-gray-900 /* Warna saat hover */
              transition-colors /* Animasi perubahan warna */
            "
          >
        inputorder
          </Link>

          <Link
            href="/mesin"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            mesin
          </Link>

          <Link
            href="/part"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            part
          </Link>
          <Link
            href="/repairpart"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            repair part
          </Link>

          <Link
            href="/inputuser"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            input user
          </Link>

          <Link
            href="/loginadmin"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            login admin
          </Link>

          <Link
            href="/loginuser"
            className="
              text-gray-600
              hover:text-gray-900
              transition-colors
            "
          >
            login user
          </Link>
        </div>
      </div>
    </nav>
  );
}
