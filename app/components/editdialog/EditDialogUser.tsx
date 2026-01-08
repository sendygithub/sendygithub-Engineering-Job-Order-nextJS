"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Label from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ChevronDown} from "lucide-react";
import { useState } from "react";




// deklarasi fungsi DialogUser
export default function EditDialogUser () {



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
    }).then(() => {
      setForm({
        username: "",
        email: "",
        password: "",
        role: "",
        fullName: "",
      });
    });


     window.location.reload();
  }






return (

	<Dialog.Root>
		{/* // Trigger Button */}
		<Dialog.Trigger asChild>
			<button className="text-xs mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-orange-500 text-white">
				Edit
			</button>
		</Dialog.Trigger>
		{/* // The Modal Content */}
		<Dialog.Portal>
			<Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-blackA9" />
			<Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gray-100 shadow-lg focus:outline-none data-[state=open]:animate-contentShow">
				




				{/* <UserForm /> */}



				<div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border">

        {/* HEADER */}
        <div className="bg-orange-600 text-white px-8 py-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">
           Edit User
          </h1>
          <p className="text-orange-100 text-sm">
            Form Edit user
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
              autoComplete="off"
            />
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

          <div className="space-y-1">
                     <Label.Root className="font-semibold">
                        Role
                     </Label.Root>
         
                     <Select.Root
                       value={form.role}
                       onValueChange={(value) =>
                         setForm((prev) => ({ ...prev, role: value }))
                       }
                     >
                       <Select.Trigger className="inline-flex items-center justify-between w-full px-3 py-2 border rounded-md bg-white hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500">
                         <Select.Value placeholder="Pilih role" />
                         <Select.Icon>
                           <ChevronDown size={16} />
                         </Select.Icon>
                       </Select.Trigger>
         
                       <Select.Portal>
                         <Select.Content className="bg-white border rounded-md shadow z-50">
                           <Select.Viewport>
                             <Select.Item
                               value="OPERATOR"
                               className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                             >
                               <Select.ItemText>OPERATOR</Select.ItemText>
                             </Select.Item>
         
                             <Select.Item
                               value="MECHANIC"
                               className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                             >
                               <Select.ItemText>MECHANIC</Select.ItemText>
                             </Select.Item>
         
                             <Select.Item
                               value="ADMIN"
                               className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                             >
                               <Select.ItemText>ADMIN</Select.ItemText>
                             </Select.Item>
                           </Select.Viewport>
                         </Select.Content>
                       </Select.Portal>
                     </Select.Root>
                   </div>

          

          {/* SUBMIT */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-semibold"
            >
              Update User
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


