"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function StartScreen() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-600 text-white">
      <h1 className="text-5xl font-bold mb-8">Lucky Spin Casino</h1>
      <div className="mb-8">
        <Image src="/wheel.png" alt="Big wheel icon" width={200} height={200} />
      </div>
      <Link href="/lobby">
        <Button size="lg" className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
          START GAME
        </Button>
      </Link>
    </main>
  );
}
