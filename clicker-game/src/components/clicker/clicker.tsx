"use client";
import { useState } from "react";
import styles from "./clicker.module.scss";



export default function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.Container}>
      <h1>Clicker Game</h1>

      <button
        className={styles.Button}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>

      <p>Score: {count}</p>
    </div>
  );
}