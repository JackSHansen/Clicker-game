"use client";

import styles from "./FishArena.module.scss";

type Props = {
  fish: string;
  onClick: () => void;
};

export default function FishArena({
  fish,
  onClick
}: Props) {
  return (
    <section className={styles.arena}>
      <h1>
        CLICK THE FISH!
      </h1>

      <p>
        Evolve through
        20 unique species
      </p>

      <div className={styles.circle} />

      <img
        src={fish}
        alt="Current Fish"
        className={styles.fish}
        onClick={onClick}
      />
    </section>
  );
}