"use client";
import * as React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "../ui/dialog";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, UserPlus, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function DialogUser() {
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
    }).then(() => {
      setForm({
        username: "",
        email: "",
        password: "",
        role: "",
        fullName: "",
      });
    });
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20">
          <UserPlus className="size-4 mr-2" />
          Tambah User
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <UserPlus className="size-5 text-cyan-500" />
            </div>
            <div>
              <DialogTitle>Buat User Baru</DialogTitle>
              <DialogDescription>Form pendaftaran user sistem</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Username */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                Username
              </Label.Root>
              <Input
                name="username"
                value={form.username}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="username_identity"
                required
              />
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                Nama Lengkap (Opsional)
              </Label.Root>
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="full_name_string"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                Email Address
              </Label.Root>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="identity@system.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                Access Code
              </Label.Root>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Role */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                Access Level (Role)
              </Label.Root>
              <Select.Root
                value={form.role}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, role: value }))
                }
              >
                <Select.Trigger className="flex items-center justify-between w-full h-10 px-3 bg-slate-900/50 border border-slate-800 rounded-md text-sm text-white focus:border-cyan-500/50 outline-none transition-all">
                  <Select.Value placeholder="Select Privilege" />
                  <Select.Icon>
                    <ChevronDown size={16} className="text-slate-500" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-[100] overflow-hidden">
                    <Select.Viewport className="p-1">
                      {["OPERATOR", "MECHANIC", "ADMIN"].map((role) => (
                        <Select.Item
                          key={role}
                          value={role}
                          className="px-8 py-2.5 text-xs font-mono text-slate-400 cursor-pointer hover:bg-cyan-500/10 hover:text-cyan-400 outline-none relative flex items-center select-none"
                        >
                          <Select.ItemText>{role}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <ShieldCheck className="size-3 text-cyan-500/50" />
              SECURE_ACTION
            </div>
            <Button
              type="submit"
              className="bg-white text-slate-950 hover:bg-cyan-500 hover:text-white font-black uppercase italic tracking-widest px-8 shadow-lg shadow-white/5"
            >
              Initialize User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
