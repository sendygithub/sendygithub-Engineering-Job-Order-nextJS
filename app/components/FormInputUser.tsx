"use client";

import * as Select from "@radix-ui/react-select";
import * as Label from "@radix-ui/react-label";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { roles } from "@/lib/roles";

export function UserForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    fullName: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/user", {
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
            Buat User Baru
          </h1>
          <p className="text-orange-100 text-sm">
            Form pendaftaran user sistem
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Username */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Username
            </Label.Root>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="username"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Email
            </Label.Root>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="email@company.com"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Password
            </Label.Root>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="********"
              required
            />
          </div>

          {/* Role */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Role
            </Label.Root>

            <Select.Root
              onValueChange={(value) =>
                setForm({ ...form, role: value })
              }
            >
              <Select.Trigger className="w-full border rounded-md px-3 py-2 flex justify-between items-center">
                <Select.Value placeholder="Pilih role" />
                <ChevronDown size={16} />
              </Select.Trigger>

              <Select.Content className="bg-white border rounded-md shadow">
                <Select.Viewport>
                  {roles.map((role) => (
                    <Select.Item
                      key={role.value}
                      value={role.value}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <Select.ItemText>
                        {role.label}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Nama Lengkap (Opsional)
            </Label.Root>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Nama lengkap"
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

export default UserForm