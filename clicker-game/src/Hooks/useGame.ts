"use client";

import { useMemo, useState } from "react";
import { fishStages } from "@/utils/fishData";

export function useGame() {
  const [score, setScore] =
    useState(0);

  const [clickPower] =
    useState(1);

  const handleClick = () => {
    setScore(
      prev => prev + clickPower
    );
  };

  const currentFish =
    useMemo(() => {
      return (
        [...fishStages]
          .reverse()
          .find(
            fish =>
              score >= fish.unlockScore
          ) || fishStages[0]
      );
    }, [score]);

  const nextFish =
    fishStages.find(
      fish =>
        fish.unlockScore >
        currentFish.unlockScore
    );

  const progress =
    nextFish
      ? ((score -
          currentFish.unlockScore) /
          (nextFish.unlockScore -
            currentFish.unlockScore)) *
        100
      : 100;

  return {
    score,
    clickPower,
    handleClick,
    currentFish,
    nextFish,
    progress
  };
}