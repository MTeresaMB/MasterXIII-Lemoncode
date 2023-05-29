import { CharacterEntityApi, EndPoint } from './character-collection.api-model';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const {data} = await axios.get<EndPoint>(url);
  return data.results;
};

