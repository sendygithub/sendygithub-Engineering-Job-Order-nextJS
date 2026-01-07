"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectContent } from "@radix-ui/react-select";
import { Wrench, CalendarIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,	
  FormItem,
  FormLabel,	
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";


// Zod Schema untuk validasi (sesuaikan dengan model Prisma)
const formSchema = z.object({
	description: z.string().min(10),
	priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
	notes: z.string().min(10),
	machineId: z.number(),
	assignedToId: z.number(),
	startDate: z.date(),
	endDate: z.date(),
});




// deklarasi fungsi DialogRepairOrder
export function DialogRepairOrder () {
	
		// deklarasi state form repair order dengan useForm dari react-hook-form
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
		priority: "",
		description: "",
		notes: "",
		machineId: 1,
		assignedToId: 2,
		startDate: new Date(),
		endDate: new Date(),
		},
	});

	async function onSubmit(values: FormValues) {
		fetch("/api/repairorder", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		description: values.description,
		priority: values.priority,
		machineId: values.machineId,
		assignedToId: values.assignedToId,
		notes: values.notes,
		startDate: values.startDate,
		endDate: values.endDate,
	}),
	});
	}



return (
				<Dialog.Root>
					{/* // Trigger Button */}
					<Dialog.Trigger asChild>
						<button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none bg-orange-500 text-white">
							Tambah Job Order
						</button>
					</Dialog.Trigger>
					{/* // The Modal Content */}
					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-blackA9" />
						<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
						<div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 py-12 px-4">
						<div className="max-w-3xl mx-auto">
							<Card className="border-orange-200 shadow-2xl bg-white/95 backdrop-blur">
							<CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
								<CardTitle className="text-3xl font-bold flex items-center gap-3">
								<Wrench className="w-10 h-10" />
								Job Order
								</CardTitle>
								<CardDescription className="text-orange-100">
								Laporkan kerusakan mesin untuk ditangani oleh tim mekanik
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-1">
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
                  name="mesin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-semibold ">pilih mesin</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:border-orange-500">
                            <SelectValue placeholder="Pilih prioritas" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-50">
                          <SelectItem value="abc2">abc1</SelectItem>
                          <SelectItem value="MEDIUM">Sedang</SelectItem>
                          <SelectItem value="HIGH">Tinggi / Mendesak</SelectItem>
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


				































					
				
				<Dialog.Close asChild>
					<button
						className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-orange-500 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
						aria-label="Close"
					>
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
	  );
};

export default DialogRepairOrder;
