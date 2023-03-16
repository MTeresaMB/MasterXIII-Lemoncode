import React from "react";
import { SearchCharaters } from "./characterSearch";

export const CharacterTable: React.FC = () => {
  const {filter, setFilter, characters} = SearchCharaters();

  return (
    <>
      <input type="text" value={filter} onChange={(e) =>setFilter(e.target.value)} />

      <p>ID: {characters.id}</p>
      <p>name: {characters.name}</p>
      <p>ID: {characters.status}</p>
      <p>ID: {characters.species}</p>
      <img src={characters.image} alt="avatar"></img>
    </>
  );
};

/*     async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results)
    }
    fetchData(); */
