import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden min-h-screen py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-sky-200 to-transparent opacity-70" />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm shadow-blue-200/80">
              Tema baru: biru dan putih, tipis, elegan
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Antarmuka engineering yang modern, minimalis, dan lembut.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Navigasi yang bersih, tabel premium, dan animasi halus untuk memudahkan kontrol mesin, part, serta repair order Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                Buka Dashboard
              </Link>
              <Link href="/dashboard/inputuser" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Kelola User
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="hero-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Statistik mesin</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">98%</p>
              <p className="mt-2 text-sm text-slate-500">Waktu uptime bulanan</p>
            </div>
            <div className="hero-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Repair order</p>
              <p className="mt-4 text-3xl font-semibold text-slate-950">42</p>
              <p className="mt-2 text-sm text-slate-500">Pesanan terbuka dan prioritas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
