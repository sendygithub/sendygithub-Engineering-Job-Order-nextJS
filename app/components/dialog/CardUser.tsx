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
    <div className="rounded-lg border border-gray-900 bg-white p-3 shadow-sm hover:shadow-md transition duration-300 p-">
        <div className="flex justify-end"> 
            <button className="text-xs mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit User</button>
            <Button className="text-xs mt-2 mr-2 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete User</Button>
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
