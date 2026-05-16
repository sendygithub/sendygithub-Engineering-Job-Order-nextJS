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
import { useState } from "react";
import * as Label from "@radix-ui/react-label";
import { Package, ShieldCheck, PlusSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function DialogPart() {
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
    }).then(() => {
      setForm({
        name: "",
        description: "",
        stock: "",
      });
    });
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20">
          <PlusSquare className="size-4 mr-2" />
          Tambah Part
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Package className="size-5 text-cyan-500" />
            </div>
            <div>
              <DialogTitle>Inventory Protocol</DialogTitle>
              <DialogDescription>Register new technical component</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Part Name */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                01 Component_Name
              </Label.Root>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="part_identifier_str"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                02 Technical_Specifications
              </Label.Root>
              <Input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="component_description_log"
                required
              />
            </div>

            {/* Stock */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                03 Inventory_Reserve
              </Label.Root>
              <Input
                type="text"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50"
                placeholder="current_stock_level"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <ShieldCheck className="size-3 text-cyan-500/50" />
              DATABASE_WRITE_READY
            </div>
            <Button
              type="submit"
              className="bg-white text-slate-950 hover:bg-cyan-500 hover:text-white font-black uppercase italic tracking-widest px-8 shadow-lg shadow-white/5"
            >
              Commit Part
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogPart;
