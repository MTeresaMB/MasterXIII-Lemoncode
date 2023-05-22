import { CharacterEntityApi, EndPoint } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import axios from 'axios';

let characterCollection = [...mockCharacterCollection];

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const {data} = await axios.get<EndPoint>(url);
  console.log(data)
  return data.results;
};

