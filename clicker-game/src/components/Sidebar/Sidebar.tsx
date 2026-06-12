import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <h1>12,458</h1>
        <p>Total Clicks</p>
      </div>

      <div className={styles.card}>
        <span>CURRENT FISH</span>
        <h2>Oarfish</h2>
        <p>Stage 1 / 20</p>

        <div className={styles.progress}>
          <div className={styles.fill}></div>
        </div>

        <small>512 / 1,000 clicks</small>
      </div>

      <div className={styles.card}>
        <span>NEXT FISH</span>
        <h2>Kæmpe rokke</h2>
      </div>

      <div className={styles.tip}>
        <h3>💡 TIP</h3>
        <p>Keep clicking to evolve into bigger fish!</p>
      </div>
    </aside>
  );
}