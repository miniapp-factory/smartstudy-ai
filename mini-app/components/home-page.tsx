"use client";

import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";
import { useState } from "react";

export default function HomePage({ pet }: { pet: { type: string; name: string } }) {
  const [hunger, setHunger] = useState(50);
  const [cleanliness, setCleanliness] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);

  const feed = () => {
    setHunger(Math.min(hunger + 30, 100));
    setHappiness(Math.min(happiness + 5, 100));
    setCleanliness(Math.max(cleanliness - 2, 0));
    setExp(exp + 10);
  };

  const sleep = () => {
    setEnergy(Math.min(energy + 50, 100));
    setHunger(Math.max(hunger - 10, 0));
    setExp(exp + 12);
  };

  const play = () => {
    setHappiness(Math.min(happiness + 20, 100));
    setEnergy(Math.max(energy - 10, 0));
    setHunger(Math.max(hunger - 5, 0));
    setExp(exp + 15);
  };

  const bath = () => {
    setCleanliness(Math.min(cleanliness + 40, 100));
    setHappiness(Math.min(happiness + 2, 100));
    setExp(exp + 8);
  };

  const jump = () => {
    setHappiness(Math.min(happiness + 3, 100));
    setEnergy(Math.max(energy - 2, 0));
    setExp(exp + 3);
  };

  const smile = () => {
    setHappiness(Math.min(happiness + 3, 100));
    setEnergy(Math.max(energy - 2, 0));
    setExp(exp + 3);
  };

  const roll = () => {
    setHappiness(Math.min(happiness + 3, 100));
    setEnergy(Math.max(energy - 2, 0));
    setExp(exp + 3);
  };

  const run = () => {
    setHappiness(Math.min(happiness + 3, 100));
    setEnergy(Math.max(energy - 2, 0));
    setExp(exp + 3);
  };

  const walk = () => {
    setHappiness(Math.min(happiness + 3, 100));
    setEnergy(Math.max(energy - 2, 0));
    setExp(exp + 3);
  };

  const fight = () => {
    // Simple placeholder logic for fight
    setExp(exp + 20);
  };

  const levelUp = () => {
    const nextLevelExp = level * 100;
    if (exp >= nextLevelExp) {
      setLevel(level + 1);
      setExp(exp - nextLevelExp);
    }
  };

  // Check for level up on every action
  const actions = [feed, sleep, play, bath, jump, smile, roll, run, walk, fight];
  actions.forEach(action => {
    const original = action;
    action = () => {
      original();
      levelUp();
    };
  });

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold">{pet.name}</h2>
      <img src={`/${pet.type}.png`} alt={pet.name} width={200} height={200} />
      <p>Level {level}</p>
      <div className="w-full bg-muted rounded-full h-2 mt-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${(exp / (level * 100)) * 100}%` }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        <div>Hunger: {hunger}</div>
        <div>Cleanliness: {cleanliness}</div>
        <div>Happiness: {happiness}</div>
        <div>Energy: {energy}</div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        <Button onClick={feed}>Feed</Button>
        <Button onClick={sleep}>Sleep</Button>
        <Button onClick={play}>Play</Button>
        <Button onClick={bath}>Bath</Button>
        <Button onClick={jump}>Jump</Button>
        <Button onClick={smile}>Smile</Button>
        <Button onClick={roll}>Roll</Button>
        <Button onClick={run}>Run</Button>
        <Button onClick={walk}>Walk</Button>
        <Button onClick={fight}>Fight</Button>
      </div>
      <Share text={`${pet.name} is playing! ${url}`} />
    </div>
  );
}
