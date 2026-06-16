"use client";

import styles from "./Sidebar.module.scss";

type Props = {
  score: number;
  currentFish: string;
  nextFish: string;
  progress: number;
};

export default function Sidebar({
  score,
  currentFish,
  nextFish,
  progress
}: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <span>TOTAL CLICKS</span>

        <h1>
          {score.toLocaleString()}
        </h1>
      </div>

      <div className={styles.card}>
        <span>CURRENT FISH</span>

        <h2>{currentFish}</h2>

        <p>
          Next evolution:
          <br />
          {nextFish}
        </p>

        <div className={styles.progress}>
          <div
            className={styles.fill}
            style={{
              width: `${progress}%`
            }}
          />
        </div>
      </div>

      <div className={styles.tip}>
        <h3>TIP</h3>

        <p>
          Click the fish to gain
          points and unlock larger
          ocean species.
        </p>
      </div>
    </aside>
  );
}