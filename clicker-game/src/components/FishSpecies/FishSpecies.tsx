import styles from "./FishSpecies.module.scss";

const fish = [
"Neon tetra",
"Guppy",
"Klovnefisk",
"Sild",
"Aborre",
"Makrel",
"Laks",
"Havkat",
"Torsk",
"Silkehaj",
"Tun",
"Sværdfisk",
"Helleflynder",
"Tigerhaj",
"Hammerhaj",
"Hvidhaj",
"Oarfish",
"Kæmpe rokke",
"Hvalhaj",
"Blåhval"
];

export default function FishSpecies() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        ALL 20 FISH SPECIES
      </div>

      <div className={styles.grid}>
        {fish.map((name, index) => (
          <div
            key={name}
            className={`${styles.card} ${
              index === 0 ? styles.active : ""
            }`}
          >
            <span className={styles.number}>
              {index + 1}.
            </span>

            <h3>{name}</h3>

            <div className={styles.imageWrapper}>
              <img
                src={`/fish/${index + 1}.png`}
                alt={name}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}