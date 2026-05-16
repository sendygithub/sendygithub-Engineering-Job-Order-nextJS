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
import { Hammer, ShieldCheck, Edit3 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { RepairPart } from "@/app/types/repair-part.type";

interface EditDialogRepairPartProps {
  repairPart: RepairPart;
}

function EditDialogRepairPart({ repairPart }: EditDialogRepairPartProps) {
  const [form, setForm] = useState({
    repairOrderId: repairPart.repairOrderId.toString(),
    partId: repairPart.partId.toString(),
    quantity: repairPart.quantity.toString(),
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
        <Button variant="ghost" className="h-8 px-3 text-xs bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white border border-cyan-500/20 font-mono uppercase tracking-tighter italic font-bold">
          Edit
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Edit3 className="size-5 text-orange-500" />
            </div>
            <div>
              <DialogTitle>Update Allocation</DialogTitle>
              <DialogDescription>Modify part assignment parameters</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Repair Order ID */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                01 Target_Job_Order
              </Label.Root>
              <Input
                type="number"
                name="repairOrderId"
                value={form.repairOrderId}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="ORDER_ID_REF"
                required
              />
            </div>

            {/* Part ID */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                02 Resource_Identity
              </Label.Root>
              <Input
                type="number"
                name="partId"
                value={form.partId}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="PART_ID_REF"
                required
              />
            </div>

            {/* Quantity */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                03 Update_Volume
              </Label.Root>
              <Input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50"
                placeholder="NEW_COUNT"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <ShieldCheck className="size-3 text-orange-500/50" />
              SYSTEM_SYNC_ACTIVE
            </div>
            <Button
              type="submit"
              className="bg-orange-500 text-white hover:bg-orange-600 font-black uppercase italic tracking-widest px-8 shadow-lg shadow-orange-500/20"
            >
              Update Protocol
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialogRepairPart;
