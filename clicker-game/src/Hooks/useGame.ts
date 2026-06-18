"use client";

import {
  useEffect,
  useMemo,
  useState
} from "react";

import { fishStages } from "@/utils/fishData";

import {
  loadGame,
  saveGame
} from "@/utils/storage";

export function useGame() {
  const [score, setScore] =
    useState(0);

  const [clickPower, setClickPower] =
    useState(1);

  const [
    autoClickPower,
    setAutoClickPower
  ] = useState(0);

  /*
   * LOAD SAVE
   */

  useEffect(() => {
    const save = loadGame();

    if (!save) return;

    setScore(save.score);
    setClickPower(save.clickPower);
    setAutoClickPower(
      save.autoClickPower
    );
  }, []);

  /*
   * AUTO SAVE
   */

  useEffect(() => {
    saveGame({
      score,
      clickPower,
      autoClickPower
    });
  }, [
    score,
    clickPower,
    autoClickPower
  ]);

  /*
   * CLICK HANDLER
   */

  const handleClick = () => {
    setScore(
      prev =>
        prev + clickPower
    );
  };

  /*
   * CURRENT FISH
   */

  const currentFish =
    useMemo(() => {
      return (
        [...fishStages]
          .reverse()
          .find(
            fish =>
              score >=
              fish.unlockScore
          ) || fishStages[0]
      );
    }, [score]);

  /*
   * NEXT FISH
   */

  const nextFish =
    fishStages.find(
      fish =>
        fish.unlockScore >
        currentFish.unlockScore
    );

  /*
   * PROGRESS %
   */

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
    autoClickPower,

    setScore,
    setClickPower,
    setAutoClickPower,

    handleClick,

    currentFish,
    nextFish,

    progress
  };
}