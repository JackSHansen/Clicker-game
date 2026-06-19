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

  const [
    ownedUpgrades,
    setOwnedUpgrades
  ] = useState<string[]>([]);

  /*
   * LOAD SAVE
   */

  useEffect(() => {
    const save = loadGame();

    if (!save) return;

    setScore(save.score ?? 0);

    setClickPower(
      save.clickPower ?? 1
    );

    setAutoClickPower(
      save.autoClickPower ?? 0
    );

    setOwnedUpgrades(
      save.ownedUpgrades ?? []
    );
  }, []);

  /*
   * AUTO SAVE
   */

  useEffect(() => {
    saveGame({
      score,
      clickPower,
      autoClickPower,
      ownedUpgrades
    });
  }, [
    score,
    clickPower,
    autoClickPower,
    ownedUpgrades
  ]);

  /*
   * CLICK
   */

  const handleClick = () => {
    setScore(
      prev =>
        prev + clickPower
    );
  };

  /*
   * AUTO CLICK
   */

  useEffect(() => {
    if (autoClickPower <= 0)
      return;

    const interval =
      setInterval(() => {
        setScore(
          prev =>
            prev +
            autoClickPower
        );
      }, 1000);

    return () =>
      clearInterval(interval);
  }, [autoClickPower]);

  /*
   * BUY UPGRADE
   */

  const buyUpgrade = (
    id: string,
    cost: number,
    clickBonus: number,
    autoBonus: number
  ) => {
    if (
      ownedUpgrades.includes(id)
    )
      return;

    if (score < cost)
      return;

    setScore(
      prev => prev - cost
    );

    setClickPower(
      prev =>
        prev + clickBonus
    );

    setAutoClickPower(
      prev =>
        prev + autoBonus
    );

    setOwnedUpgrades(prev => [
      ...prev,
      id
    ]);
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
   * PROGRESS
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

  ownedUpgrades,
  buyUpgrade,

  setScore,
  setClickPower,
  setAutoClickPower,

  handleClick,

  currentFish,
  nextFish,

  progress
};
}