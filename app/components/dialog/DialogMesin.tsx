"use client";

import * as React from "react";
import { Dialog, Label, Select } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ChevronDown} from "lucide-react";
import FormInputMesin from "../FormInputMesin";
import { useState } from "react";
import { roles } from "@/lib/roles";

export default function DialogMesin () {


	const [form, setForm] = useState({
		name: "",
		description: "",
		location: "",
		status: "",
		fullName: "",
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
		});
	  }



	   return (
		<Dialog.Root>

		{/* // Trigger Button */}
		<Dialog.Trigger asChild>
			<button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none bg-orange-500 text-white">
				Tambah mesin
			</button>
		</Dialog.Trigger>
		{/* // The Modal Content */}
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-blackA9" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
				
 <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">

        {/* HEADER */}
        <div className="bg-orange-600 text-white px-8 py-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">
            tambah mesin Baru
          </h1>
          <p className="text-orange-100 text-sm">
            Form pendaftaran mesin sistem
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Username */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Nama Mesin
            </Label.Root>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="nama mesin"
              required
            />
          </div>

          {/* description */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Deskripsi
            </Label.Root>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="deskripsi mesin"
              required
            />
          </div>

          {/*location */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Lokasi
            </Label.Root>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="lokasi mesin"
              required
            />
          </div>

          {/* status */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Status
            </Label.Root>

            <Select.Root
              
            >
              <Select.Trigger className="inline-flex items-center justify-between w-full px-3 py-2 border rounded-md bg-white hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <Select.Value placeholder="Pilih status" />
                <ChevronDown size={16} />
              </Select.Trigger>

              <Select.Content className="bg-white border rounded-md shadow">
                <Select.Viewport>
                 
                    <Select.Item value="aktif" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                     aktif
                    </Select.Item>
                  
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
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



				<FormInputMesin />


				
					
				
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


   
  )
	
};


