import React from "react";
import { CharacterEntity } from "@/model/CharacterEntity";
import { TableCell } from "@mui/material";

interface Props {
  character: CharacterEntity;
}


export const CharacterTableRow: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <>
      <TableCell>
        <img src={character.image} alt="avatar" />
      </TableCell>
      <TableCell>{character.id}</TableCell>
      <TableCell>{character.name}</TableCell>
    </>
  );
};
