"use client";


import * as Label from "@radix-ui/react-label";
import { useState } from "react";

export function FormInputRepairPart() {
  const [form, setForm] = useState({
    repairOrderId: "",
    partId: "",
    quantity: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/repairpart", {
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
            Repairpart 
          </h1>
          <p className="text-orange-100 text-sm">
            Form input part sistem
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">


        {/* repairpart order id */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              repair part order id
            </Label.Root>
            <input
              type="number"
              name="repairOrderId"
              value={form.repairOrderId}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="repairOrderId"
              required
            />
          </div>


          {/* Username */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Nama Part
            </Label.Root>
            <input
              type="number"
              name="partId"
              value={form.partId}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="partId"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Deskripsi
            </Label.Root>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="deskripsi mesin"
              required
            />
          </div>
          

          {/* SUBMIT */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold"
            >
              Simpan Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormInputRepairPart;