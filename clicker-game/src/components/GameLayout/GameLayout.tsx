"use client";

import styles from "./GameLayout.module.scss";

import Sidebar from "../Sidebar/Sidebar";
import FishArena from "../FishArena/FishArena";
import FishSpecies from "../FishSpecies/FishSpecies";
import UpgradePanel from "../UpgradePanel/UpgradePanel";

type Props = {
  game: {
    score: number;
    clickPower: number;
    handleClick: () => void;
    currentFish: {
      id: number;
      image: string;
      name: string;
    };
    nextFish?: {
      name: string;
      unlockScore: number;
    };
    progress: number;
  };
};

export default function GameLayout({
  game
}: Props) {
  return (
    <main className={styles.wrapper}>
      <div className={styles.left}>
        <Sidebar
          score={game.score}
          currentFish={
            game.currentFish.name
          }
          nextFish={
            game.nextFish?.name ??
            "MAX LEVEL"
          }
          progress={game.progress}
        />
      </div>

      <div className={styles.center}>
        <FishArena
          fish={
            game.currentFish.image
          }
          onClick={
            game.handleClick
          }
        />
      </div>

      <div className={styles.right}>
        <FishSpecies
          currentFishId={
            game.currentFish.id
          }
        />
      </div>

      <div className={styles.bottom}>
        <UpgradePanel />
      </div>
    </main>
  );
}