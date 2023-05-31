import { CharacterEntityApi, EndPoint } from './character-collection.api-model';
import axios from 'axios';


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const url = 'http://localhost:3000/results';
  const { data } = await axios.get<EndPoint>(url).catch((e) => {
    return e;
  })
  console.log('data', data);
  return data;
};

