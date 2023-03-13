import React from "react";
import { CharacterEntity } from "@/model/CharacterEntity";

interface Props {
  character: CharacterEntity;
}


export const CharacterTableRow: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <th>
        <img src={character.image} alt="avatar" />
      </th>
      <th>{character.id}</th>
      <th>{character.name}</th>
    </>
  );
};
