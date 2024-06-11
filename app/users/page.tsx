"use client";

import { useFetchUsers } from "@/hooks";
import type { User } from "@/types";
import Link from "next/link";

export default function Users() {
  const { data: users, isError, isPending } = useFetchUsers();

  console.log(users);

  return (
    <main>
      <h2 className="font-bold">Users</h2>
      <p>Some subtitle text goes here</p>

      <table className="table-auto w-full text-left text-sm mt-8">
        <thead>
          <tr className="bg-gray-100 *:p-2">
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: User) => (
              <tr key={user.id} className="*:pt-2 *:px-2">
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>
                  <a
                    href={`mailto:${user.email}`}
                    className="underline text-indigo-400 hover:no-underline active:text-indigo-700"
                  >
                    {user.email}
                  </a>
                </td>
                <td>
                  <Link href={`/users/${user.id}`}>View</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
}
