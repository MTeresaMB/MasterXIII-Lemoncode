import React from "react";
import { CharacterTableRow } from "./character-table-row";
import { CharacterEntity } from "@/model/CharacterEntity";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export const CharacterTable = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

  React.useEffect = () => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching members");
        }
      })
      .then(setCharacters)
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">AVATAR</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">NAME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((character) => (
              <TableRow key={character.id}>
                <CharacterTableRow key={character.id} character={character} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
