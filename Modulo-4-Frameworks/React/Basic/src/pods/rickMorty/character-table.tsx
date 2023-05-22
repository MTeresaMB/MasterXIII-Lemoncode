import { CharacterEntity } from "@/model/CharacterEntity";
import { Box } from "@mui/material";
import React from "react";
import ReactPaginate from "react-paginate";
import { CharacterTableRow } from "./character-table-row";
import { SearchCharaters } from "./characterSearch";
import c from './listRickMorty.style.css';


export const CharacterTable: React.FC = () => {
  const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);
  const [filter, setFilter] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(0);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const CharactersPerPage = 6;
  const indexOfLastCharacter = (pageNumber + 1) * CharactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - CharactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter,
  );
  

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${filter}`,
      );
      if (response.ok) {
        const data = await response.json();
        setCharacters(data.results);
      } else {
        throw new Error('Error fetching members');
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    handleSearch();
  }, [filter]);

  return (
    <Box className={c.bodyRick}>
      <SearchCharaters/>
      <Box className={c.inputContainer}>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Search characters..."/>
      </Box>

      <Box>
        <Box className={c.cardContainer}>
          {currentCharacters.map((character) => (
            <CharacterTableRow key={character.id} character={character} />
          ))}       
        </Box>
        <Box className={c.containerPagination}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(characters.length / CharactersPerPage)}
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
    </Box>
  );
};









    













            /*   const characterPerPage = 6;
              const indexOfLastCharacter = pageNumber * characterPerPage;
            
              const displaycharacters = characters
                .slice(indexOfLastCharacter, indexOfLastCharacter + characterPerPage)
                .map((character) => {
                  return <CharacterTableRow key={character.id} character={character} />;
              });
 */