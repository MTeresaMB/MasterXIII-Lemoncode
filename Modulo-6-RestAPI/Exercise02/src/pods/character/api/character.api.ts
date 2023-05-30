import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: number): Promise<Character> => {
  const url = `http://localhost:3000/results/${id}`;
  const { data } = await axios.get<Character>(url).catch((e) => {
    return e;
  });
  console.log('data', data);
  return data;
};


export const saveSentences = async (character: Character): Promise<boolean> => {
  const id = character.id;
  const url = `http://localhost:3000/results/${id}`;
  
  if (character.id) {
    let saved = await axios.put<any>(url, character);
  } else {
    let saved = await axios.post<any>(url, character);
  }

  return true;
}
