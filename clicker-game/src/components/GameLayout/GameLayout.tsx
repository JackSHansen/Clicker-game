import styles from "./GameLayout.module.scss";

export default function GameLayout({
  left,
  center,
  right,
  bottom,
}: {
  left: React.ReactNode;
  center: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
}) {
  return (
    <main className={styles.wrapper}>
      <section className={styles.left}>
        {left}
      </section>

      <section className={styles.center}>
        {center}
      </section>

      <section className={styles.right}>
        {right}
      </section>

      <section className={styles.bottom}>
        {bottom}
      </section>
    </main>
  );
}