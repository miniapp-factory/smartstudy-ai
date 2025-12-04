"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-background p-2 flex justify-around">
      <Link href="/"><Button variant="ghost">Home</Button></Link>
      <Link href="/my-pets"><Button variant="ghost">My Pets</Button></Link>
      <Link href="/store"><Button variant="ghost">Store</Button></Link>
      <Link href="/settings"><Button variant="ghost">Settings</Button></Link>
    </nav>
  );
}
