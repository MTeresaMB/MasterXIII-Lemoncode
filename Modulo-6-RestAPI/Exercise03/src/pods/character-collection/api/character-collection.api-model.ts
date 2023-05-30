export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }
  location: {
    name: string;
    url: string;
  }
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface EndPoint {
  info: Info;
  results: CharacterEntityApi[];
}