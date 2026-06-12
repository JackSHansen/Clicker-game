import GameLayout from "../components/GameLayout/GameLayout";
import Sidebar from "../components/Sidebar/Sidebar";
import FishArena from "../components/FishArena/FishArena";
import FishSpecies from "../components/FishSpecies/FishSpecies";
import EvolutionBar from "../components/EvolutionBar/EvolutionBar";

export default function Home() {
  return (
    <GameLayout
      left={<Sidebar />}
      center={<FishArena />}
      right={<FishSpecies />}
      bottom={<EvolutionBar />}
    />
  );
}