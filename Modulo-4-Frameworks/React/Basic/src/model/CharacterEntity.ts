export interface CharacterEntity {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: {
    name:string
  };
  location: {
    name: string;
  }
  dimension: string;
  type: string;
  gender: string;
  episode: {
    name:string
  }
}

