import { Character } from './character.api-model';
import axios from 'axios';
//import { Lookup } from 'common/models';
//import { mockCities, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const {data} = await axios.get(url);
  return data
};

/* export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
}; */

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
