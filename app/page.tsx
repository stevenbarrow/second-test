"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

  export default function HomePage(){
    const router = useRouter()

    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">hello world</h1>

        <Button variant="outline" onClick={() => router.push("/dashboard")}>
          Go to dashboard
        </Button>

      </main>
    )

  }