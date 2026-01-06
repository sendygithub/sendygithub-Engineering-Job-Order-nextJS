"use client";
import * as React from "react";
import { Dialog, Label, Select } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ChevronDown, User } from "lucide-react";
import UserForm from "../FormInputUser";
import { useState } from "react";
import { roles } from "@/lib/roles";



// deklarasi fungsi DialogUser
export default function DialogUser () {



  // deklarasi state form user
const [form, setForm] = useState({
	username: "",
	email: "",
	password: "",
	role: "",
	fullName: "",
  });

  // fungsi handleChange untuk mengubah state form
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // fungsi handleSubmit untuk mengirim data form ke API
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/user", {
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
				Tambah User
			</button>
		</Dialog.Trigger>
		{/* // The Modal Content */}
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-blackA9" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
				




				{/* <UserForm /> */}



				<div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">

        {/* HEADER */}
        <div className="bg-orange-600 text-white px-8 py-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">
            Buat User Baru
          </h1>
          <p className="text-orange-100 text-sm">
            Form pendaftaran user sistem
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Username */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Username
            </Label.Root>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="username"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Email
            </Label.Root>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="email@company.com"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Password
            </Label.Root>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="********"
              required
            />
          </div>

          {/* Role */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Role
            </Label.Root>

            <Select.Root
              onValueChange={(value) =>
                setForm({ ...form, role: value })
              }
            >
              <Select.Trigger className="w-full border rounded-md px-3 py-2 flex justify-between items-center">
                <Select.Value placeholder="Pilih role" />
                <ChevronDown size={16} />
              </Select.Trigger>

              <Select.Content className="bg-white border rounded-md shadow">
                <Select.Viewport>
                  {roles.map((role) => (
                    <Select.Item
                      key={role.value}
                      value={role.value}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <Select.ItemText>
                        {role.label}
                      </Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Root>
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <Label.Root className="font-semibold">
              Nama Lengkap (Opsional)
            </Label.Root>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Nama lengkap"
            />
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


