import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const {data} = await axios.get(url);
  return data
};

