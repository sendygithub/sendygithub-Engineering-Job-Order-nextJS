"use client";
import { CalendarIcon, Wrench } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { format } from "date-fns";
import { cn } from "./ui/utils";


// Asumsi data dummy (dalam aplikasi nyata, fetch dari API/Prisma)
const machines = [
  { id: 1, name: "Mesin Injection 01" },
  { id: 2, name: "Mesin Press 02" },
  { id: 3, name: "Mesin CNC A1" },
];

const mechanics = [
  { id: 1, fullName: "Ahmad Mekanik" },
  { id: 2, fullName: "Budi Teknik" },
  { id: 3, fullName: "Cahyo Senior" },
];

// Zod Schema untuk validasi (sesuaikan dengan model Prisma)
const formSchema = z.object({
  description: z.string().min(10),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  machineId: z.number("Pilih mesin yang bermasalah" ).min(1, { message: "Pilih mesin yang bermasalah" }),
  assignedToId: z.number().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function RepairOrderForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priority: "MEDIUM",
      description: "",
      notes: "",
    },
  });

  async function onSubmit(values: FormValues) {
    fetch("/api/repairorder", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    description: "Mesin injection bocor oli dan suara abnormal",
    priority: "HIGH",
    machineId: 1,
    assignedToId: 2,
    notes: "Perlu pengecekan urgent",
    createdById: 5, // idealnya dari session
  }),
});

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="border-orange-200 shadow-2xl bg-white/95 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold flex items-center gap-3">
              <Wrench className="w-10 h-10" />
              Buat Surat Perintah Perbaikan Mesin
            </CardTitle>
            <CardDescription className="text-orange-100">
              Laporkan kerusakan mesin untuk ditangani oleh tim mekanik
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Deskripsi Masalah */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-semibold">Deskripsi Masalah</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jelaskan detail kerusakan mesin..."
                          className="resize-none min-h-15 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-600">
                        Tulis secara lengkap agar mekanik mudah memahami
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                 {/* Garis pemisah */}
                
                <div className="flex col-2  gap-3 ">
                    {/* Prioritas */}
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-semibold ">Prioritas Perbaikan</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-orange-500">
                            <SelectValue placeholder="Pilih prioritas" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-50">
                          <SelectItem value="LOW">Rendah</SelectItem>
                          <SelectItem value="MEDIUM">Sedang</SelectItem>
                          <SelectItem value="HIGH">Tinggi / Mendesak</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Mesin */}
                <FormField
                  control={form.control}
                  name="machineId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-semibold">Mesin Bermasalah</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(parseInt(value))}
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-orange-500">
                            <SelectValue placeholder="Pilih mesin" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-50">
                          {machines.map((machine) => (
                            <SelectItem key={machine.id} value={machine.id.toString()}>
                              {machine.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />  
                </div>

                

                {/* Assigned To (Mechanic) - Opsional */}
                  <FormField
                    control={form.control}
                    name="assignedToId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 font-semibold">
                          Ditugaskan Kepada (Opsional)
                        </FormLabel>

                        <Select
                          onValueChange={(value) =>
                            field.onChange(value ? parseInt(value) : undefined)
                          }
                          value={field.value?.toString()}
                        >
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-orange-500">
                              <SelectValue placeholder="Pilih ID Mekanik" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent className="bg-gray-50">
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormDescription className="text-gray-600">
                          Bisa dikosongkan, supervisor akan assign nanti
                        </FormDescription>

                        <FormMessage />
                      </FormItem>
                    )}
                  />



                <div className="flex col-2  gap-3 ">
                     {/* Start Date - Opsional */}
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-gray-800 font-semibold">Tanggal Mulai Perbaikan (Opsional)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal border-gray-300",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pilih tanggal</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date("1900-01-01")}
                            initialFocus className="bg-gray-50"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* End Date - Opsional */}
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-gray-800 font-semibold">Tanggal Selesai Perbaikan (Opsional)</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal border-gray-300",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>Pilih tanggal</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date("1900-01-01")}
                            initialFocus className="bg-gray-50"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
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
                      <FormLabel className="text-gray-800 font-semibold">Catatan Tambahan (Opsional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Catatan dari operator atau mekanik..."
                          className="resize-none min-h-15 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 shadow-lg"
                  >
                    Submit Perintah Perbaikan
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RepairOrderForm;