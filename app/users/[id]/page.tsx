"use client";

import { useRouter } from "next/navigation";

export default function User({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <main>
      <button
        type="button"
        onClick={() => router.back()}
        className="rounded-full cursor-pointer"
      >
        Back
      </button>
    </main>
  );
}
