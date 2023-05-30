export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  bestSentences: string[];
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  episode: string[];
  url: string;
  created: string;

}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  bestSentences: [""],
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  episode: [""],
  url: '',
  created: '',

})