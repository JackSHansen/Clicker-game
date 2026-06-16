"use client";

import styles from "./FishSpecies.module.scss";
import { fishStages } from "@/utils/fishData";

type Props = {
  currentFishId: number;
};

export default function FishSpecies({
  currentFishId
}: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        ALL 20 FISH SPECIES
      </div>

      <div className={styles.grid}>
        {fishStages.map((fish) => (
          <div
            key={fish.id}
            className={`${styles.card} ${
              fish.id === currentFishId
                ? styles.active
                : ""
            }`}
          >
            <div className={styles.topRow}>
              <span className={styles.number}>
                {fish.id}.
              </span>

              <h3 className={styles.fishName}>
                {fish.name}
              </h3>
            </div>

            <div className={styles.imageWrapper}>
              <img
                src={fish.image}
                alt={fish.name}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}