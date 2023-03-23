import React from "react";
import { MemberEntity } from "@/model/MemberEntity";
import { MemberTableRow } from "./member-table-row";
import { OrganizationSearch } from "./organization-search";
import { OrganizationContext } from "@/app";
import ReactPaginate from "react-paginate";
import { useDebounce } from "use-debounce";
import { Box } from "@mui/material";
import c from "./list-style.css";

export const MemberTable = () => {
  const { organizationName } = React.useContext(OrganizationContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  // Pagination 
  const [pageNumber, setPageNumber] = React.useState(0);
  const MembersPerPage = 6;
  const indexOfLastMember = (pageNumber + 1) * MembersPerPage;
  const indexOfFirstMember = indexOfLastMember - MembersPerPage;
  const currentMembers = members.slice(
    indexOfFirstMember,
    indexOfLastMember,
  );
  
  // debounced search
  const debouncedSearchTerm = useDebounce(searchTerm, 5000);
  
  // API call
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/orgs/${organizationName}/members?q=${debouncedSearchTerm}`,
      );
      if (response.ok) {
        const data = await response.json();
        setMembers(data);
      } else {
        throw new Error('Error fetching members');
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    handleSearch();
  }, [organizationName, debouncedSearchTerm]);

  return (
    <Box className={c.bodyMembers}>
      <OrganizationSearch />
      <Box>
        <Box className={c.containerCard}>
        {currentMembers.map((member) => (
            <MemberTableRow key={member.id} member={member} />
          ))}     
        </Box>
        <Box className={c.containerPagination}>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(members.length / MembersPerPage)}
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
