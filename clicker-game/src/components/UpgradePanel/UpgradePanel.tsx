"use client";

import styles from "./UpgradePanel.module.scss";
import { upgrades } from "@/utils/upgrades";

export default function UpgradePanel() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        UPGRADES
      </div>

      <div className={styles.grid}>
        {upgrades.map((upgrade) => (
          <div
            key={upgrade.id}
            className={styles.card}
          >
            <div className={styles.top}>
              <h3>{upgrade.name}</h3>

              <span>
                {upgrade.cost.toLocaleString()}
              </span>
            </div>

            <div className={styles.bottom}>
              {upgrade.clickPower > 0 && (
                <p>
                  +{upgrade.clickPower}
                  {" "}
                  Click Power
                </p>
              )}

              {upgrade.autoPower > 0 && (
                <p>
                  +{upgrade.autoPower}
                  /sec
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}