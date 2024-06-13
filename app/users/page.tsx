"use client";

import { useEffect } from "react";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useStore } from "@/store/index";

export default function Users() {
  const { data: users, isError, isPending } = useFetchUsers();
  const { setUsers } = useStore();

  useEffect(() => {
    if (users) {
      setUsers(users);
    }
  }, [users, setUsers]);

  if (isError) {
    return (
      <Alert variant="destructive">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          There was an error fetching the users. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  if (isPending) {
    return (
      <Card className="p-8">
        <Skeleton className="w-[200px] h-6 mb-2" />
        <Skeleton className="w-[300px] h-4 mb-6" />
        <div className="space-y-3">
          {Array.from({ length: 10 }, (_, index) => (
            <Skeleton key={index} className="w-full h-[48px]" />
          ))}
        </div>
      </Card>
    );
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
