import React from 'react';
import { CharacterEntity } from '@/model/CharacterEntity';
import { useDebounce } from 'use-debounce';

export const SearchCharaters = () => {
  const [filter, setFilter] = React.useState("1");
  const [characters, setCharacters] = React.useState<CharacterEntity>(
    {
      id: "",
      name: "",
      status: "",
      species: "",
      image: "",
    }
  );

  const [debouncedCharacter] = useDebounce(filter, 1500);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${filter}`)
    .then((response) => response.json())
    .then(setCharacters)
  },[debouncedCharacter]);

  return {filter, setFilter, characters}
}