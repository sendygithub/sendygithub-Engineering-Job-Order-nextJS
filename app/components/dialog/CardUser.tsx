"use client";

import { Button } from "../ui/button";

type User = {
  id: string;
  username: string;
  email: string;
  role: string;
    fullName: string;
};

export function UserCard({ user }: { user: User }) {
  return (
    <div className="rounded-lg border border-gray-900 bg-white p-3 shadow-sm hover:shadow-md transition">
        <div className="flex justify-end"> 
            <Button className="text-xs mt-2 text-blue-600 hover:underline">Edit User</Button>
            <Button className="text-xs mt-2 ml-2 text-red-600 hover:underline">Delete User</Button>
        </div>
       
      <div className="mb-2">
        <p className="text-lg font-semibold">User Name :{user.username}</p>
        <p className="text-sm text-gray-500">fullname:{user.fullName}</p>
        <p className="text-sm text-gray-500">email :{user.email}</p>
        <p className="text-sm text-gray-500">ID:  {user.id}</p>
        
        
      </div>

      <span className="inline-block rounded bg-gray-100 px-2 py-1 text-xs font-medium">
        {user.role}
      </span>
    </div>
  );
}
