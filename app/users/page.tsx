"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { useFetchUsers } from "@/hooks";

export default function Users() {
  const { data: users, isError, isPending } = useFetchUsers()

  console.log(users)

  if (isError) {
    return <p>Error fetching users</p>
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User List</CardTitle>
        <CardDescription>Find and manage your users below</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={users} />
      </CardContent>
    </Card>
  );
}
