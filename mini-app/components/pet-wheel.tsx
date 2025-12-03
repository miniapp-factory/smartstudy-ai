"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const PET_TYPES = ["cat", "dog", "bunny", "fish", "bird", "hamster"];
const PET_NAMES = ["Fluffy", "Buddy", "Mittens", "Splash", "Tweet", "Nibbles"];

export default function PetWheel({
  onSpin,
}: {
  onSpin: (pet: { type: string; name: string }) => void;
}) {
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setTimeout(() => {
      const type = PET_TYPES[Math.floor(Math.random() * PET_TYPES.length)];
      const name = PET_NAMES[Math.floor(Math.random() * PET_NAMES.length)];
      onSpin({ type, name });
      setSpinning(false);
    }, 2000);
  };

  return (
    <Button onClick={spin} disabled={spinning}>
      {spinning ? "Spinning..." : "Spin for a new pet"}
    </Button>
  );
}
