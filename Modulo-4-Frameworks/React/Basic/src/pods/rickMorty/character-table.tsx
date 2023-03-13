import React from "react";
import { CharacterTableRow } from "./character-table-row";
import { CharacterEntity } from "@/model/CharacterEntity";

export const CharacterTable = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
/*     async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results)
    }
    fetchData(); */
    fetch('https://rickandmortyapi.com/api/character')
    .then((data) => {
      if(data.ok){
        return data.json();
      }else{
        throw new Error('Invalid character')
      }
    })
    .then(data => setCharacters(data.results))
    .catch(() => {})
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <CharacterTableRow key={character.id} character={character} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
