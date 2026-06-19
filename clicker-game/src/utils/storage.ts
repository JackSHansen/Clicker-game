const STORAGE_KEY =
  "fish-clicker-save";

export function saveGame(
  data: any
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadGame() {
  const data =
    localStorage.getItem(
      STORAGE_KEY
    );

  if (!data) return null;

  return JSON.parse(data);
}

export function clearSave() {
  localStorage.removeItem(
    STORAGE_KEY
  );
}