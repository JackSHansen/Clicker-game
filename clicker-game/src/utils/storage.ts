const STORAGE_KEY = "fish-clicker-save";

export interface SaveData {
  score: number;
  clickPower: number;
  autoClickPower: number;
}

export function saveGame(data: SaveData) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadGame(): SaveData | null {
  const save =
    localStorage.getItem(STORAGE_KEY);

  if (!save) return null;

  try {
    return JSON.parse(save);
  } catch {
    return null;
  }
}

export function clearSave() {
  localStorage.removeItem(
    STORAGE_KEY
  );
}