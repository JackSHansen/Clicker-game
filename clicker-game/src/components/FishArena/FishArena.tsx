import styles from "./FishArena.module.scss";

export default function FishArena() {
  return (
    <section className={styles.arena}>
      <h1>CLICK THE FISH!</h1>
      <p>Evolve through 20 unique species</p>

      <div className={styles.circle}></div>

      <img
        src="/Fish/oarfish.png"
        alt=""
        className={styles.fish}
      />

      <div className={styles.clickText}>
        +1
      </div>
    </section>
  );
}