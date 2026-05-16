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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Wrench, CalendarIcon, ShieldCheck, Edit3 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,	
  FormItem,
  FormLabel,	
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const formSchema = z.object({
  description: z.string().min(10),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  notes: z.string().min(10).optional(),
  machineId: z.number(),
  assignedToId: z.number().optional(),
  startDate: z.date().optional(),
  createdById: z.number(),
  endDate: z.date().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function EditDialogRepairOrder() {
  const [open, setOpen] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priority: undefined,
      description: "",
      notes: "",
      machineId: undefined,
      createdById: 1,
      assignedToId: 2,
      startDate: undefined,
      endDate: undefined,
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      await fetch("/api/repairorder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      form.reset();
      setOpen(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="h-8 px-3 text-xs bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white border border-cyan-500/20 font-mono uppercase tracking-tighter italic font-bold">
          Edit
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Edit3 className="size-5 text-orange-500" />
            </div>
            <div>
              <DialogTitle>Modify Job Order</DialogTitle>
              <DialogDescription>Update technical maintenance specifications</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                    01 System_Defect_Log
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Input updated technical details..."
                      className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] font-mono" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Priority */}
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                      02 Priority_State
                    </FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-900/50 border-slate-800 text-white focus:border-cyan-500/50">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-900 border-slate-800 text-slate-400">
                        <SelectItem value="LOW">LOW_PRIORITY</SelectItem>
                        <SelectItem value="MEDIUM">MEDIUM_PRIORITY</SelectItem>
                        <SelectItem value="HIGH">HIGH_CRITICALITY</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[10px] font-mono" />
                  </FormItem>
                )}
              />

              {/* Machine ID */}
              <FormField
                control={form.control}
                name="machineId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                      03 Resource_ID
                    </FormLabel>
                    <Select value={field.value?.toString()} onValueChange={(value) => field.onChange(Number(value))}>
                      <FormControl>
                        <SelectTrigger className="bg-slate-900/50 border-slate-800 text-white focus:border-cyan-500/50">
                          <SelectValue placeholder="ID" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-900 border-slate-800 text-slate-400">
                        {[1, 2, 3].map((id) => (
                          <SelectItem key={id} value={id.toString()}>UNIT_{id.toString().padStart(3, '0')}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[10px] font-mono" />
                  </FormItem>
                )}
              />
            </div>

            {/* Assigned To */}
            <FormField
              control={form.control}
              name="assignedToId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                    04 Technical_Officer
                  </FormLabel>
                  <Select value={field.value?.toString()} onValueChange={(value) => field.onChange(Number(value))}>
                    <FormControl>
                      <SelectTrigger className="bg-slate-900/50 border-slate-800 text-white focus:border-cyan-500/50">
                        <SelectValue placeholder="Select Technician" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-400">
                      {[1, 2, 3].map((id) => (
                        <SelectItem key={id} value={id.toString()}>OFFICER_ID_{id.toString().padStart(2, '0')}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px] font-mono" />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* Start Date */}
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                      05 Start_Timestamp
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "pl-3 text-left font-mono text-xs bg-slate-900/50 border-slate-800 text-white hover:bg-slate-900",
                              !field.value && "text-slate-700"
                            )}
                          >
                            {field.value ? format(field.value, "yyyy-MM-dd") : <span>YYYY-MM-DD</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 text-cyan-500/50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border-slate-800" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date("1900-01-01")}
                          className="bg-slate-950 text-white border-slate-800"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-[10px] font-mono" />
                  </FormItem>
                )}
              />

              {/* End Date */}
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                      06 Finish_Estimate
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "pl-3 text-left font-mono text-xs bg-slate-900/50 border-slate-800 text-white hover:bg-slate-900",
                              !field.value && "text-slate-700"
                            )}
                          >
                            {field.value ? format(field.value, "yyyy-MM-dd") : <span>YYYY-MM-DD</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 text-orange-500/50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border-slate-800" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date("1900-01-01")}
                          className="bg-slate-950 text-white border-slate-800"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage className="text-[10px] font-mono" />
                  </FormItem>
                )}
              />
            </div>

            {/* Notes */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">
                    07 Internal_Commentary
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add system notes..."
                      className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50 min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px] font-mono" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
                <ShieldCheck className="size-3 text-cyan-500/50" />
                MOD_KEY_AUTHENTICATED
              </div>
              <Button
                type="submit"
                className="bg-orange-500 text-white hover:bg-orange-600 font-black uppercase italic tracking-widest px-8 shadow-lg shadow-orange-500/20"
              >
                Sync Changes
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDialogRepairOrder;
