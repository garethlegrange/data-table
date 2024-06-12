"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useFetchUser } from "@/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function User({ params }: { params: { id: string } }) {
  const { data: user, isError, isPending } = useFetchUser(Number(params.id));
  const router = useRouter();

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <main className="flex flex-col gap-y-4">
      <aside>
        <Button
          type="button"
          onClick={() => router.back()}
          variant="ghost"
          className="rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M6.414 3c-.464 0-.909.184-1.237.513L1.22 7.47a.75.75 0 0 0 0 1.06l3.957 3.957A1.75 1.75 0 0 0 6.414 13h5.836A2.75 2.75 0 0 0 15 10.25v-4.5A2.75 2.75 0 0 0 12.25 3H6.414ZM8.28 5.72a.75.75 0 0 0-1.06 1.06L8.44 8 7.22 9.22a.75.75 0 1 0 1.06 1.06L9.5 9.06l1.22 1.22a.75.75 0 1 0 1.06-1.06L10.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L9.5 6.94 8.28 5.72Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </Button>
      </aside>

      <Card>
        <CardHeader className="border-b border-gray-200">
          <h1 className="font-bold">{user?.name}</h1>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-2 gap-4 text-sm pt-6">
          <Card>
            <CardHeader className="pb-1">
              <h2 className="font-bold">User Info</h2>
            </CardHeader>
            <CardContent className="text-xs">
              <ul>
                <li>
                  <strong>Username:</strong> {user?.username}
                </li>
                <li>
                  <strong>Email:</strong> {user?.email}
                </li>
                <li>
                  <strong>Phone:</strong> {user?.phone}
                </li>
                <li>
                  <strong>Website:</strong> {user?.website}
                </li>
                <li>
                  <strong>Company:</strong> {user?.company.name}
                </li>
                <li>
                  <strong>Catchphrase:</strong> {user?.company.catchPhrase}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-1">
              <h2 className="font-bold">Address</h2>
            </CardHeader>
            <CardContent className="text-xs">
              <address>
                <ul>
                  <li>
                    <strong>Street:</strong> {user?.address.street}
                  </li>
                  <li>
                    <strong>Suite:</strong> {user?.address.suite}
                  </li>
                  <li>
                    <strong>City:</strong> {user?.address.city}
                  </li>
                  <li>
                    <strong>Zipcode:</strong> {user?.address.zipcode}
                  </li>
                  <li>
                    <strong>Lat:</strong> {user?.address.geo.lat} &amp;{" "}
                    <strong>Lng:</strong> {user?.address.geo.lng}
                  </li>
                </ul>
              </address>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
