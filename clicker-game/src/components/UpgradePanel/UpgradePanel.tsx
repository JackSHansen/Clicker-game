"use client";

import styles from "./UpgradePanel.module.scss";
import { upgrades } from "@/utils/upgrades";

type Props = {
  score: number;

  ownedUpgrades: string[];

  buyUpgrade: (
    id: string,
    cost: number,
    clickBonus: number,
    autoBonus: number
  ) => void;
};

export default function UpgradePanel({
  score,
  ownedUpgrades,
  buyUpgrade
}: Props) {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        UPGRADES
      </div>

      <div className={styles.grid}>
        {upgrades.map((upgrade) => {
          const owned =
            ownedUpgrades.includes(
              upgrade.id
            );

          const affordable =
            score >= upgrade.cost;

          return (
            <button
              key={upgrade.id}
              disabled={owned}
              className={`
                ${styles.card}
                ${
                  owned
                    ? styles.owned
                    : ""
                }
                ${
                  !affordable &&
                  !owned
                    ? styles.locked
                    : ""
                }
              `}
              onClick={() =>
                buyUpgrade(
                  upgrade.id,
                  upgrade.cost,
                  upgrade.clickBonus,
                  upgrade.autoBonus
                )
              }
            >
              <div className={styles.top}>
                <h3>{upgrade.name}</h3>

                <span>
                  {upgrade.cost.toLocaleString()}
                </span>
              </div>

              <div className={styles.bottom}>
                {upgrade.clickBonus >
                  0 && (
                  <p>
                    +
                    {
                      upgrade.clickBonus
                    }{" "}
                    Click
                  </p>
                )}

                {upgrade.autoBonus >
                  0 && (
                  <p>
                    +
                    {
                      upgrade.autoBonus
                    }
                    /sec
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}