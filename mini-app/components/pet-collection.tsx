"use client";

import { useState } from "react";
import Pet from "./pet";
import PetWheel from "./pet-wheel";

export default function PetCollection() {
  const [pets, setPets] = useState<
    { id: string; type: string; name: string; level: number }[]
  >([]);

  const addPet = (pet: { type: string; name: string }) => {
    if (pets.length >= 6) return;
    setPets([
      ...pets,
      { id: `${Date.now()}-${Math.random()}`, ...pet, level: 1 },
    ]);
  };

  const levelUp = (id: string) => {
    setPets(
      pets.map((p) => (p.id === id ? { ...p, level: p.level + 1 } : p))
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">My Pets</h2>
      <div className="grid grid-cols-2 gap-4">
        {pets.map((p) => (
          <Pet key={p.id} pet={p} onLevelUp={() => levelUp(p.id)} />
        ))}
      </div>
      {pets.length < 6 && <PetWheel onSpin={addPet} />}
      {pets.length === 6 && <p>You have collected all pets!</p>}
    </div>
  );
}
