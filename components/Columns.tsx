"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { User } from "@/types";
import Link from "next/link";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return (
        <a
          href={`mailto:${row.getValue("email")}`}
          className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-400"
        >
          {row.getValue("email")}
        </a>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="sr-only">Action</div>,
    cell: ({ row }) => {
      return (
        <Link
          href={`users/${row.getValue("id")}`}
          type="button"
          className="text-indigo-400 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-400"
        >
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
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      );
    },
  },
];
