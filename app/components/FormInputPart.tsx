"use client";

import * as Label from "@radix-ui/react-label";
import { useState } from "react";


export function FormInputPart() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    stock: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/part", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">

        {/* HEADER */}
        <div className="bg-orange-600 text-white px-8 py-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">
            tambah part Baru
          </h1>
          <p className="text-orange-100 text-sm">
            Form pendaftaran part sistem
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Username */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Nama Part
            </Label.Root>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="nama part"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Deskripsi
            </Label.Root>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="deskripsi mesin"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              stock
            </Label.Root>
            <input
              type="text"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="stock part"
              required
            />
          </div>
          

          {/* SUBMIT */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold"
            >
              Simpan User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInputPart;