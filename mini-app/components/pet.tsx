"use client";

import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";
import { useState } from "react";

export interface Pet {
  id: string;
  type: string;
  name: string;
  level: number;
}

export default function Pet({
  pet,
  onLevelUp,
}: {
  pet: Pet;
  onLevelUp: () => void;
}) {
  const progress = Math.min((pet.level % 20) / 20, 1);
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={`/${pet.type}.png`} alt={pet.name} width={96} height={96} />
      <h3 className="mt-2 font-semibold">{pet.name}</h3>
      <p className="text-sm text-muted-foreground">Level {pet.level}</p>
      <div className="w-full bg-muted rounded-full h-2 mt-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <Button className="mt-2" onClick={onLevelUp}>
        Level Up
      </Button>
      <Share text={`${pet.name} is now level ${pet.level}! ${url}`} />
    </div>
  );
}
