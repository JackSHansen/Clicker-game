"use client";

import styles from "./EvolutionBar.module.scss";

type Props = {
  progress: number;
};

export default function EvolutionBar({
  progress
}: Props) {
  return (
    <section className={styles.bar}>
      <div
        className={styles.progressFill}
        style={{
          width: `${progress}%`
        }}
      />

      <span className={styles.text}>
        Evolution Progress
        {" "}
        {Math.floor(progress)}%
      </span>
    </section>
  );
}