import { CharacterEntity } from "@/model/CharacterEntity";
import { Box } from "@mui/material";
import React from "react";
import ReactPaginate from "react-paginate";
import { CharacterTableRow } from "./character-table-row";
import { SearchCharaters } from "./characterSearch";
import c from './listRickMorty.style.css';


export const CharacterTable: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [pageNumber, setPageNumber] = React.useState<number>(0);

  const characterPerPage = 6;
  const indexOfLastCharacter = pageNumber * characterPerPage;

  const displaycharacters = characters
    .slice(indexOfLastCharacter, indexOfLastCharacter + characterPerPage)
    .map((character) => {
      return <CharacterTableRow key={character.id} character={character} />;
  });

  async function fetchData() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results)
  }
  fetchData();



  return (
    <>
      <SearchCharaters/>
      <Box>
        <Box className={c.containerCard}>{displaycharacters}</Box>
        <Box className={c.containerPagination}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(characters.length / characterPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={6}
            onPageChange={({ selected }) => {
              setPageNumber(selected);
            }}
            containerClassName={c.paginationBttns}
            previousLinkClassName={c.previousBttn}
            nextLinkClassName={c.nextBttn}
            disabledClassName={c.paginationDisabled}
            activeClassName={c.paginationActive}
          ></ReactPaginate>
        </Box>
      </Box>
¡        
    </>
  );
};

/*     async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results)
    }
    fetchData(); */
