"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const PET_TYPES = ["cat", "dog", "bunny", "dragon", "monkey", "fish", "bird", "lion", "tiger", "elephant"];
const PET_NAMES = ["Fluffy", "Buddy", "Mittens", "Splash", "Tweet", "Nibbles", "Coco", "Spark", "Luna", "Paws", "Bubbles", "Sunny", "Milo", "Ziggy", "Rex", "Daisy"];

export default function PetWheel({
  onSpin,
  mode = "type",
}: {
  onSpin: (pet: { type: string; name: string }) => void;
  mode?: "type" | "name";
}) {
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setTimeout(() => {
      if (mode === "type") {
        const type = PET_TYPES[Math.floor(Math.random() * PET_TYPES.length)];
        onSpin({ type, name: "" });
      } else {
        const name = PET_NAMES[Math.floor(Math.random() * PET_NAMES.length)];
        onSpin({ type: "", name });
      }
      setSpinning(false);
    }, 2000);
  };

  return (
    <Button onClick={spin} disabled={spinning}>
      {spinning
        ? "Spinning..."
        : `Spin for a ${mode === "type" ? "pet" : "name"}`}
    </Button>
  );
}
