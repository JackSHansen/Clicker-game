export interface FishStage {
  id: number;
  name: string;
  unlockScore: number;
  image: string;
}

export interface GameState {
  score: number;
  clickPower: number;
  autoClickPower: number;
}