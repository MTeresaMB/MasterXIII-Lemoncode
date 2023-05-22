export interface Character {
  id: number;
  name: string;
}

export const createEmptyCharacter = (): Character => ({
  id: Math.floor(Math.random() * 1000),
  name: '',
});
