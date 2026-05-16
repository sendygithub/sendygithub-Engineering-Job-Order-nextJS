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
import { useState, useEffect } from "react";
import * as Label from "@radix-ui/react-label";
import { Package, ShieldCheck, Edit3 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  partId: number;
};

export default function EditDialogPart({ partId }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    if (!open) return;
    async function fetchPart() {
      const res = await fetch(`/api/part/${partId}`);
      const data = await res.json();
      setForm({
        name: data.name,
        description: data.description,
        stock: data.stock.toString(),
      });
    }
    fetchPart();
  }, [open, partId]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`/api/part/${partId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setOpen(false);
    window.location.reload();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 px-3 text-xs bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white border border-cyan-500/20 font-mono uppercase tracking-tighter italic font-bold">
          Edit Part
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Edit3 className="size-5 text-orange-500" />
            </div>
            <div>
              <DialogTitle>Update Component</DialogTitle>
              <DialogDescription>Modify inventory data records</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Part Name */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                01 Component_Label
              </Label.Root>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="new_identifier"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                02 Technical_Log
              </Label.Root>
              <Input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="updated_description"
                required
              />
            </div>

            {/* Stock */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                03 Current_Quantity
              </Label.Root>
              <Input
                type="text"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50"
                placeholder="numerical_value"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <ShieldCheck className="size-3 text-orange-500/50" />
              RECORD_MODIFIED
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
