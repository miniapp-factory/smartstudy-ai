"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import PetWheel from "./pet-wheel";
import PetCollection from "./pet-collection";
import HomePage from "./home-page";
import NavigationBar from "./navigation-bar";

export default function FlowManager() {
  const [step, setStep] = useState(0);
  const [selectedPet, setSelectedPet] = useState<{ type: string; name: string } | null>(null);

  const handleTypeSpin = (pet: { type: string; name: string }) => {
    setSelectedPet({ type: pet.type, name: "" });
    setStep(2);
  };

  const handleNameSpin = (pet: { type: string; name: string }) => {
    setSelectedPet(prev => prev ? { ...prev, name: pet.name } : null);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {step === 0 && (
        <>
          <img src="/logo.png" alt="Digital Pet" width={200} height={200} />
          <Button onClick={() => setStep(1)}>Get Started</Button>
        </>
      )}
      {step === 1 && <PetWheel onSpin={handleTypeSpin} mode="type" />}
      {step === 2 && <PetWheel onSpin={handleNameSpin} mode="name" />}
      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold">About the Game</h2>
          <p className="text-muted-foreground">
            GAME DETAILS: Your goal is to level up your pet and yourself. Make your pet Sleep, Feed, Play, Bath/Clean to gain EXP. Level is unlimited. Every 20 levels, a new spinning wheel unlocks so the user can adopt another pet. New pets always start at Level 1. Pets visually grow each time they level up. Player EXP and Pet EXP increase whenever the player does actions such as Feed, Sleep, Play, Bath, Clean. Manual actions: Jump, Smile, Roll, Run, Walk. Fight button unlocked if you own more than 1 pet. Click Start to play.
          </p>
          <Button onClick={() => setStep(5)}>Start Adventure</Button>
        </>
      )}
      {step === 4 && <PetCollection />}
      {step === 5 && (
        <>
          <HomePage pet={selectedPet!} />
          <NavigationBar />
        </>
      )}
    </div>
  );
}
