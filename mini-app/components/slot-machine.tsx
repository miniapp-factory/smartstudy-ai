"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { url } from "@/lib/metadata";

const fruits = ["apple", "banana", "cherry", "lemon"] as const;
type Fruit = typeof fruits[number];

function getRandomFruit(): Fruit {
  return fruits[Math.floor(Math.random() * fruits.length)];
}

export default function SlotMachine() {
  const [grid, setGrid] = useState<Fruit[][]>([
    [getRandomFruit(), getRandomFruit(), getRandomFruit()],
    [getRandomFruit(), getRandomFruit(), getRandomFruit()],
    [getRandomFruit(), getRandomFruit(), getRandomFruit()],
  ]);
  const [spinning, setSpinning] = useState(false);
  const [win, setWin] = useState<string | null>(null);

  useEffect(() => {
    if (!spinning) return;
    const interval = setInterval(() => {
      setGrid((prev) => {
        const newGrid = prev.map((row) => [...row]);
        // shift rows down
        newGrid[2] = newGrid[1];
        newGrid[1] = newGrid[0];
        newGrid[0] = [getRandomFruit(), getRandomFruit(), getRandomFruit()];
        return newGrid;
      });
    }, 200);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setSpinning(false);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [spinning]);

  useEffect(() => {
    if (spinning) return;
    // check rows
    for (const row of grid) {
      if (row.every((f) => f === row[0])) {
        setWin(`You won with ${row[0]}!`);
        return;
      }
    }
    // check columns
    for (let col = 0; col < 3; col++) {
      const colVals = grid.map((r) => r[col]);
      if (colVals.every((f) => f === colVals[0])) {
        setWin(`You won with ${colVals[0]}!`);
        return;
      }
    }
    setWin(null);
  }, [grid, spinning]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-2">
        {grid.flat().map((fruit, idx) => (
          <img
            key={idx}
            src={`/${fruit}.png`}
            alt={fruit}
            width={64}
            height={64}
          />
        ))}
      </div>
      <Button
        onClick={() => setSpinning(true)}
        disabled={spinning}
        variant="outline"
      >
        Spin
      </Button>
      {win && (
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl font-bold">{win}</span>
          <Share text={`${win} ${url}`} />
        </div>
      )}
    </div>
  );
}
