"use client";

import GameLayout from "../components/GameLayout/GameLayout";
import { useGame } from "../Hooks/useGame";

export default function Home() {
  const game = useGame();

  return (
    <GameLayout
      game={game}
    />
  );
}