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
import { ChevronDown, Factory, ShieldCheck, Edit3 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function EditDialogMesin() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    status: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/mesin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      setForm({
        name: "",
        description: "",
        location: "",
        status: "",
      });
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
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Edit3 className="size-5 text-orange-500" />
            </div>
            <div>
              <DialogTitle>Update Unit Configuration</DialogTitle>
              <DialogDescription>Modify active machine parameters</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Machine Name */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                01 Unit_Identifier
              </Label.Root>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="new_model_id"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                02 Functional_State
              </Label.Root>
              <Input
                type="text"
                name="description"
                value={form.description}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="operational_log"
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                03 Tactical_Location
              </Label.Root>
              <Input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50"
                placeholder="facility_map_id"
                required
              />
            </div>

            {/* Status */}
            <div className="space-y-1.5">
              <Label.Root className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                04 Operational_Status_Flag
              </Label.Root>
              <Select.Root
                value={form.status}
                onValueChange={(value) =>
                  setForm((prev) => ({ ...prev, status: value }))
                }
              >
                <Select.Trigger className="flex items-center justify-between w-full h-10 px-3 bg-slate-900/50 border border-slate-800 rounded-md text-sm text-white focus:border-cyan-500/50 outline-none transition-all">
                  <Select.Value placeholder="Change Status" />
                  <Select.Icon>
                    <ChevronDown size={16} className="text-slate-500" />
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-[100] overflow-hidden">
                    <Select.Viewport className="p-1">
                      {["ACTIVE", "MAINTENANCE", "BROKEN"].map((status) => (
                        <Select.Item
                          key={status}
                          value={status}
                          className="px-8 py-2.5 text-xs font-mono text-slate-400 cursor-pointer hover:bg-cyan-500/10 hover:text-cyan-400 outline-none relative flex items-center select-none"
                        >
                          <Select.ItemText>{status}</Select.ItemText>
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
              <ShieldCheck className="size-3 text-orange-500/50" />
              RECORD_SYNCHRONIZED
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
