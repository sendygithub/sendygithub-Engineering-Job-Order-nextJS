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
import { Hammer, ShieldCheck, PackagePlus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function DialogRepairPart() {
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
    window.location.reload();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20">
          <PackagePlus className="size-4 mr-2" />
          Tambah Repair Part
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Hammer className="size-5 text-cyan-500" />
            </div>
            <div>
              <DialogTitle>Repair Part Allocation</DialogTitle>
              <DialogDescription>Assign components to active job orders</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Repair Order ID */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                01 Repair_Order_Ref
              </Label.Root>
              <Input
                type="number"
                name="repairOrderId"
                value={form.repairOrderId}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="ORDER_ID_NUM"
                required
              />
            </div>

            {/* Part ID */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                02 Component_ID
              </Label.Root>
              <Input
                type="number"
                name="partId"
                value={form.partId}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="PART_ID_NUM"
                required
              />
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                03 Allocation_Volume
              </Label.Root>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50"
                placeholder="UNIT_COUNT"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <ShieldCheck className="size-3 text-cyan-500/50" />
              RESOURCE_LOCKED
            </div>
            <Button
              type="submit"
              className="bg-white text-slate-950 hover:bg-cyan-500 hover:text-white font-black uppercase italic tracking-widest px-8 shadow-lg shadow-white/5"
            >
              Allocate Part
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogRepairPart;
